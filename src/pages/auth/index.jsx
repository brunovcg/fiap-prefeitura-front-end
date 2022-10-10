import { useState } from "react";
import Login from "./templates/login";
import Signup from "./templates/signup";
import StyledAuth from "./styles";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => setIsLogin((state) => !state);
  const titleRenderer = isLogin ? "Login" : "Signup";
  const renderer = isLogin ? <Login /> : <Signup setIsLogin={setIsLogin} />;
  const buttonTitle = isLogin ? "Signup" : "Login";

  const message = isLogin ? "Ainda não é cadastrado?" : "Já é Cadastrado?";

  const handleHome = () => {
    navigate("/");
  };

  return (
    <StyledAuth>
      <div className="template-container">
        <h2>{titleRenderer}</h2>
        <div className="form-container">{renderer}</div>
        <div className="message-container">
          <p>{message}</p>
          <Button
            variant="secondary"
            onClick={handleClick}
            title={buttonTitle}
          />
          <div className="home-button-container">
            <div>ou vá para página inicial</div>
            <Button
              injectClass="home-button"
              onClick={handleHome}
              variant="primary"
              icon="house"
            />
          </div>
        </div>
      </div>
    </StyledAuth>
  );
}

export default Auth;
