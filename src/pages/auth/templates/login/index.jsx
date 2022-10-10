import { HookForm } from "../../../../components";
import * as yup from "yup";
import { useStore } from "../../../../providers/store";
import StyledLogin from "./styles";

function Login() {
  const { loginUser } = useStore();

  const schema = yup.object().shape({
    username: yup.string().required("CPF Necessário"),
    password: yup.string().required("Senha é necessária"),
  });

  const fields = [
    { name: "username", label: "CPF", placeholder: "Digite o CPF" },
    {
      name: "password",
      label: "Password",
      placeholder: "Digite a senha",
      type: "password",
    },
  ];

  const onSubmit = (data) => {
    loginUser(data);
  };

  return (
    <StyledLogin>
      <HookForm onSubmit={onSubmit} fields={fields} schema={schema} />
    </StyledLogin>
  );
}

export default Login;
