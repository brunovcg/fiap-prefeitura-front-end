import { HookForm } from "../../../../components";
import * as yup from "yup";
import { useStore } from "../../../../providers/store";
import StyledSignup from "./styles";

function Signup({setIsLogin}) {
  const { signupUser, personas } = useStore();

  const schema = yup.object().shape({
    username: yup.string().required("CPF Necessário"),
    name: yup.string().required("Nome Necessário"),
    password: yup.string().required("Senha é necessária"),
    confirmPassword: yup
      .string()
      .required("Necessário confirmar")
      .oneOf([yup.ref("password")], "Você não digitou a mesma senha"),
    persona: yup.string().required("Interesse é obrigatório"),
    telefone: yup.string().required("Telefone é necessário"),
    email: yup.string().email("Não é um formato de e-mail válido").required("E-mail é necessário"),
  });

  const fields = [
    { name: "username", label: "CPF", placeholder: "Digite o CPF" },
    { name: "name", label: "Nome", placeholder: "Digite o Nome" },
    { name: "password", label: "Password", placeholder: "Digite a senha", type: "password" },
    {
      name: "confirmPassword",
      label: "Password",
      placeholder: "Confirme sua senha",
      type: "password" 
    },
    { name: "telefone", label: "Telefone", placeholder: "Digite o telefone" },
    { name: "email", label: "E-mail", placeholder: "Digite o email" },
    {
      name: "persona",
      label: "Interesse",
      placeholder: "Escolha um interesse",
      fieldType: "select",
      options: personas,
    },
  ];

  const action = ({ username, password, name, persona, email, telefone }) => {
    const data = {
      username,
      password,
      name,
      persona,
      email,
      telefone,
    };

    signupUser(data, setIsLogin);
  };

  return (
    <StyledSignup>
      <HookForm action={action} fields={fields} schema={schema} />
    </StyledSignup>
  );
}

export default Signup;
