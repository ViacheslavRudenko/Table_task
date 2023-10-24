import { useState } from "react";
import "./index.css";
import CustomForm from "../../Components/Form/Form";
import { FormDataTypes } from "../../Components/Form/types";

const Login = () => {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
  });

  return (
    <div className="login-bg">
      <CustomForm
        formValue={formValue}
        setFormValue={setFormValue}
        title={"Login"}
        formData={formData}
      />
    </div>
  );
};

export default Login;

const formData: FormDataTypes[] = [
  {
    name: "login",
    label: "Login",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
  },
];
