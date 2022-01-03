import React, { useState } from "react";
import Input from "./common/Input";
import Joi from "joi-browser";

const LoginForm = () => {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(account, schema, option);
    if (!result.error) return null;
    const error = {};
    for (let item of result.error.details) error[item.path[0]] = item.message;
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    setErrors(error || {});
    if (error) return;
    console.log("Submited");
  };
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schemaAuth = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schemaAuth);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ target: input }) => {
    const errorsClone = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errorsClone[input.name] = errorMessage;
    else delete errorsClone[input.name];
    const accountClone = { ...account };
    accountClone[input.name] = input.value;
    setAccount(accountClone);
    setErrors(errorsClone);
  };

  return (
    <>
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Username"}
          value={account.username}
          name={"username"}
          type={"text"}
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          label={"Password"}
          value={account.password}
          name={"password"}
          type={"password"}
          onChange={handleChange}
          error={errors.password}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
