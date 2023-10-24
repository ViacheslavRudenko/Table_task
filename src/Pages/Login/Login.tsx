import { FormEvent, useState } from "react";
import "./index.css";
import CustomForm from "../../Components/Form/Form";
import { FormDataTypes } from "../../Components/Form/types";
import { loginDataTypes } from "./types";
import { getBlogList } from "../../api/login";

const Login = () => {
  const [formValue, setFormValue] = useState<loginDataTypes>({
    username: "",
    password: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getBlogList(formValue).then((e) => console.log(e));
    console.log("Form data submitted:", formValue);
  };

  return (
    <div className="login-bg">
      <CustomForm
        formValue={formValue}
        setFormValue={setFormValue}
        title={"Login"}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;

const formData: FormDataTypes[] = [
  {
    name: "username",
    label: "Login",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
  },
];
