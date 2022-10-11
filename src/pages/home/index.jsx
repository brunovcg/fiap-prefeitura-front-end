import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import StyledHome from "./styles";

function Home() {
  const navigate = useNavigate();

  const handleAuth = () => navigate("auth/");
  return (
    <StyledHome>
      <div className="transparent-box">
        <p className="welcome-message">
          Bem vindo ao site da Prefeitura do Recife!
        </p>
        <p className="welcome-instructions">
          Tenhas os serivços da prefeitura mais fácil e customizado por seus
          interesses, acesse o portal.
        </p>
        <Button  onClick={handleAuth} title="Acessar" variant="primary" />
      </div>
    </StyledHome>
  );
}

export default Home;
