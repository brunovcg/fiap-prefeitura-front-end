import StyledBuilingRow from "./styles";
import { Button } from "../../../../components";

function BuilingRow({ item }) {
  return (
    <StyledBuilingRow>
      <div className="building-row-info">
        <div className="building-info">
          <b>Matrícula:</b> {item.matricula}
        </div>
        <div>
          <b>Área:</b> {item.tamanho}m²
        </div>
        <div>
          <b>Endereço:</b> {item.endereco}
        </div>
      </div>
      <div className="building-row-buttons">
        <Button round variant="secondary" icon="edit" />
        <Button round variant="cancel" icon="delete" />
      </div>
    </StyledBuilingRow>
  );
}

export default BuilingRow;
