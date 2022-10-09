import { useState } from "react";
import Login from "./templates/login";
import Signup from "./templates/signup";
import StyledAuth from "./styles";
import { Button } from "../../components";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleClick = () => setIsLogin((state) => !state);
  const titleRenderer = isLogin ? "Login" : "Signup";
  const renderer = isLogin ? <Login /> : <Signup  setIsLogin={setIsLogin}/>;
  const buttonTitle = isLogin ? "Signup" : "Login";

  const message = isLogin
    ? "Ainda não é cadastrado?"
    : "Já é Cadastrado?";

  return (
    <StyledAuth>
      <div className="template-container">
        <h2>{titleRenderer}</h2>
        <div className="form-container">
        {renderer}
        </div>
        <div className="message-container">
          <p>{message}</p>
          <Button variant="secondary" onClick={handleClick} title={buttonTitle} />
        </div>
      </div>
    </StyledAuth>
  );
}

export default Auth;
