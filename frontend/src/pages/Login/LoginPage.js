import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userActions";
import Spinner from "../../components/spinner/Spinner";

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { isLoading, errorMessage, userInfo } = userLogin;
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div>
      {isLoading && <Spinner />}
      {errorMessage && <h2>{errorMessage}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>
      <p>
        Dont have an account? Create <Link to="/register">here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
