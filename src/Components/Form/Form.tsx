import { ChangeEvent, FC, FormEvent } from "react";
import CustomInput from "./Input";
import "./index.css";
import { FormDataTypes } from "./types";

const CustomForm: FC<CustomFormProps> = ({
  formValue,
  setFormValue,
  title,
  formData,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formValue);
  };

  return (
    <div className="form-container">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {formData.map((data: FormDataTypes) => (
          <CustomInput
            key={data.name}
            value={formValue[data.name]}
            handleChange={handleChange}
            name={data.name}
            label={data.label}
            type={data?.type}
          />
        ))}

        <div className="form-group">
          <input type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};

export default CustomForm;

type CustomFormProps = {
  formValue: any;
  setFormValue: any;
  title: string;
  formData: FormDataTypes[];
};
