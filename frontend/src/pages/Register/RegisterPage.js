import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/userActions";
import Spinner from "../../components/spinner/Spinner";

const RegisterPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { isLoading, errorMessage, userInfo } = userRegister;
  //   const redirect = location.search ? location.search.split("=")[1] : "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(registerUser(name, email, password));
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <div>
      {message && <h3>{message}</h3>}
      {isLoading && <Spinner />}
      {errorMessage && <h2>{errorMessage}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        have an account? Create <Link to="/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
