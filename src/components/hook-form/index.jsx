import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, FormField } from "../";
import StyledForm from "./styles";

const HookForm = ({
  schema,
  fields,
  action,
  buttonDisabled,
  buttonTitle = "Submeter",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(action)}>
      {fields &&
        fields.map((item, index) => (
          <FormField
            label={item.label}
            error={errors[item.name]?.message}
            name={item.name}
            key={index}
            fieldType={item.fieldType}
            type={item.type}
            placeholder={item.placeholder}
            register={register}
            options={item.options}
            onChange={item.onChange}
          />
        ))}

      <div>
        <Button
          variant="confirm"
          title={buttonTitle}
          type="submit"
          disabled={buttonDisabled}
        />
      </div>
    </StyledForm>
  );
};

export default HookForm;
