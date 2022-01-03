// import React, { useState } from "react";
// import Joi from "joi-browser";
// import { useNavigate } from "react-router-dom";
// import Form from "./common/Form";

// import Input from "./common/Input";

// const Login = () => {
//   const [data, setData] = useState({ userName: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const reDireact = () => {
//     return navigate("/movies");
//   };
//   const schema = {
//     userName: Joi.string().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   };
//   const doSubmit = () => {
//     reDireact();
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <Input
//           value={data.userName}
//           name={"userName"}
//           label={"User Name"}
//           type={"text"}
//           onChange={hanledeChange}
//           error={errors.userName}
//         />
//         <Input
//           value={data.password}
//           name={"password"}
//           label={"Password"}
//           type={"password"}
//           onChange={hanledeChange}
//           error={errors.password}
//         />
//         <button disabled={validate()} type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </>
//   );
// };

// export default Login;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/Input";
import Form from "./common/Form";

class Login extends Form {
  state = {
    data: { userName: "", password: "" },
    errors: {},
  };

  schema = {
    userName: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = () => {
    console.log("Submited");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={data.userName}
            name={"userName"}
            label={"User Name"}
            type={"text"}
            onChange={this.hanledeChange}
            error={this.errors.userName}
          />
          <Input
            value={data.password}
            name={"password"}
            label={"Password"}
            type={"password"}
            onChange={this.hanledeChange}
            error={errors.password}
          />
          <button
            disabled={this.validate()}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
