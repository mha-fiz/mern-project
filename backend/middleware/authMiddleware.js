import asyncHandler from "express-async-handler";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);

    req.user = await User.findById(decoded.id).select("-password");
    console.log("req.user: ", req.user);

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Authorization failed, token compromised.");
  }

  if (!token) {
    res.status(401);
    throw new Error("Unauthorized to access this route");
  }
});
