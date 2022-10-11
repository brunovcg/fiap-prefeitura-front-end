import StyledBillet from "./styles";
import { Button } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { toBRL } from "../../helpers/currency";
import { formatDate } from "../../helpers/date";
import { mask } from "../../helpers/masks";
import logo from "../../assets/images/logo-prefeitura.png";
import { useStore } from "../../providers/store";
import Barcode from "react-barcode";

function Billet() {
  const navigate = useNavigate();
  const location = useLocation();
  const building = location.state.building;
  const { user, neighborhood } = useStore();
  const { matricula, bairro, endereco, tamanho, iptu } = building;
  const handlePrint = () => window.print();
  const handleBack = () => navigate("/session/buildings/");

  const neighborhoodName = neighborhood.find((it) => Number(it.id) === Number(bairro))?.name;

  return (
    <StyledBillet>
      <div className="buttons-billet">
        <Button
          onClick={handleBack}
          variant="cancel"
          title="Voltar"
          icon="arrow_back"
        />
        <Button
          onClick={handlePrint}
          variant="primary"
          title="Imprimir"
          icon="print"
        />
      </div>

      <div className="billet-print">
        <div className="billet-header">
          <h1>Prefeitura da Cidade do Recife</h1>
          <div className="billet-header-info">
            <h2>Imprimir IPTU - {formatDate(new Date())}</h2>
            <img src={logo} alt="logo" />
          </div>
        </div>

        <div className="firstline">
          <div className="cell">
            <b>Matricula: </b>
            {matricula}
          </div>
          <div className="cell">
            <b>Endereço: </b>
            {endereco}
          </div>
        </div>
        <div className="secondline">
          <div className="cell">
            <b>Bairro: </b>
            {neighborhoodName}
          </div>
          <div className="cell">
            <b>Tamanho: </b>
            {tamanho}m²
          </div>
          <div className="cell">
            <b>VALOR: </b>
            {toBRL(iptu)}
          </div>
        </div>
        <div className="thirdline">
          <div className="cell">
            <b>Contribuinte: </b>
            {user.name}
          </div>
          <div className="cell">
            <b>CPF: </b>
            {mask(user.username, "###.###.###-##")}
          </div>
        </div>
        <div className="fourthline">
          <div className="cell">
            <p>Pague por qualquer banco: </p>
            <Barcode
              value="23793206059000000288287049011700490680000070000"
              options={{ height: 50 }}
            />
          </div>
        </div>
      </div>
    </StyledBillet>
  );
}

export default Billet;
