import StyledFormField from "./styles";

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
  register = () => {},
}) {
  return (
    <StyledFormField>
      {label && <label>{label}</label>}
      {fieldType === "select" ? (
        <select
          disabled={disabled}
          onChange={onChange}
          {...register(name)}
          defaultValue="default"
        >
          {options.map((item, index) => (
            <option key={index} value={item[optionsValue]}>
              {item[optionsValue]}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      <div className="error"> {error}</div>
    </StyledFormField>
  );
}

export default FormField;
