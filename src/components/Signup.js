import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const initialValues = {
  username: "",
  password: "",
};

const Signup = () => {
  const [user, setUser] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const postNewUser = (e) => {
    axios
      .post(
        "https://collections-application.herokuapp.com/api/users/register",
        user
      )
      .then((res) => {
        console.log(user);
        console.log(res);
        setUser(initialValues);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("clicked");
    e.preventDefault();
  };

  return (
    <StyledSignup>
      <h1>Create Account</h1>
      <form>
        {errors.username && <p>{errors.username}</p>}
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <br />
        {errors.password && <p>{errors.password}</p>}
        <label>Password:</label>
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </form>
      <button onClick={postNewUser}>Submit</button>
    </StyledSignup>
  );
};

const StyledSignup = styled.div`
  height: 20rem;
  width: 20rem;
  border: 1px solid black;
`;

export default Signup;
