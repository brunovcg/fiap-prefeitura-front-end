import StyledTemplateTaxes from "./styles";
import { Button } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import iptu1 from "../../../../../assets/images/iptu1.jpeg";

function TemplateTaxes() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/session/buildings/");
  };

  return (
    <StyledTemplateTaxes>
      <h2>Imóveis e Taxas</h2>

      <div className="iptu-container">
        <div className="button-container">
          <p className="iptu-message">Você contribui, o Recife retribui.</p>
          <Button
            injectClass="iptu-button"
            onClick={handleClick}
            variant="primary"
            title="Acessar Imóveis"
          />
        </div>
        <figure>
          <img src={iptu1} alt="iptu1" />
        </figure>
      </div>
    </StyledTemplateTaxes>
  );
}

export default TemplateTaxes;
