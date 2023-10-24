import { FC, ChangeEvent } from "react";
import "./index.css";
import { FormDataType } from "./types";

const CustomInput: FC<CustomInputProps> = ({
  value,
  handleChange,
  name,
  type = "text",
  label,
}) => {
  return (
    <div className="form-group">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default CustomInput;

type CustomInputProps = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: FormDataType;
  label: string;
};
