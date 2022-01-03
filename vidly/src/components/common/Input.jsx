import React from "react";

const Input = ({ value, name, onChange, type, label, error }) => {
  return (
    <div className="form-group mb-3">
      <label className="mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
};

export default Input;
