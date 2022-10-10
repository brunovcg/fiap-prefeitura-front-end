import StyledFormField from "./styles";
import { useState } from "react";

function FormField({
  label,
  fieldType = "input",
  type = "text",
  options,
  optionsValue = "name",
  disabled,
  error,
  name,
  placeholder,
  onChange,
  value = "",
  register = () => {},
}) {
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e) => {
    onChange?.(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <StyledFormField>
      {label && <label>{label}</label>}
      {fieldType === "select" ? (
        <select
          disabled={disabled}
          onChange={(evt) => console.log(evt.target.value)}
          {...register(name)}
          defaultValue={value}
        >
          {options.map((item, index) => (
            <option key={index}>{item[optionsValue]}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={inputValue}
          disabled={disabled}
          placeholder={placeholder}
          {...register(name)}
          onChange={handleChange}
        />
      )}
      <div className="error"> {error}</div>
    </StyledFormField>
  );
}

export default FormField;
