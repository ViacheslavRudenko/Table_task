import { FormEvent, useState } from "react";
import "./index.css";
import CustomForm from "../../Components/Form/Form";
import { FormDataTypes } from "../../Components/Form/types";
import { loginDataTypes } from "./types";
import { setLoginStatus } from "../../store/UserLogin/action";
import { useActions } from "../../hooks/useActions";
import { getLoginData } from "../../api/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValue, setFormValue] = useState<loginDataTypes>({
    username: "",
    password: "",
  });
  const { setLoginStatus } = useActions();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    getLoginData(formValue)
      .then((e) => {
        setLoginStatus(true);
        navigate("/table");
      })
      .catch((err: any) => {
        setLoginStatus(false);
      });
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
