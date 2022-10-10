import { useNavigate } from "react-router-dom";
import StyledNotFound from "./styles";
import { Button } from "../../components";
import { useStore } from "../../providers/store";

function NotFound() {
  const navigate = useNavigate();
  const { token } = useStore();
  const handleBack = () => {
    navigate("/");
  };

  const buttonTitle = token ? "Sessão" : "Home";

  return (
    <StyledNotFound>
      <div className="transparent-message">
        <h2>Página não encontrada</h2>
        <p>Você está buscando uma página que não existe, volte para:</p>
        <Button injectClass="home-button" onClick={handleBack} title={buttonTitle} variant="primary" />
      </div>
    </StyledNotFound>
  );
}

export default NotFound;
