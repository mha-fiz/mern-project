import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateUserProfile } from "../../actions/userActions";
import Spinner from "../../components/spinner/Spinner";

const ProfilePage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { isLoading, errorMessage, user } = userProfile;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdate = useSelector((state) => state.userUpdate);
  const { success } = userUpdate;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      if (!user.name) {
        dispatch(getUserProfile("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, user, dispatch]);

  return (
    <div>
      {success && <h3>Profile updated</h3>}
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

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
