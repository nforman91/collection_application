import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { push } = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://collections-application.herokuapp.com/api/users/login",
        values
      )
      .then((res) => {
        console.log("login: res = ", res);
        console.log("login: res.data.token = ", res.data.token);
        localStorage.setItem("token", res.data.token);
        push("/collections");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signUpClick = () => {
    push("/signup");
  };

  const inputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {errors.username && <p>{errors.username}</p>}
        <label>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={values.username}
            onChange={inputChange}
          />
        </label>
        <br />
        {errors.password && <p>{errors.password}</p>}
        <label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={inputChange}
          />
        </label>
      </form>
      <button onClick={formSubmit}>Login</button>
    </div>
  );
};

export default Login;
