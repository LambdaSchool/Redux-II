import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    passwod: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post()
      .then()
      .catch();
  };

  return (
    <div className="login-form">
      <form data-testid="form" onSubmit={handleSubmit}></form>
    </div>
  );
};

export default Login;
