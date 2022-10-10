import { useStore } from "../../../../providers/store";
import { Button } from "../../../../components";
import StyledBuildingDeletePopup from "./styles";

function BuildingDeletePopup({ data, setShow }) {
  const { deleteBuilding } = useStore();

  const handleDelete = () => {
    deleteBuilding(data.matricula);
    setShow(false);
  };
  return (
    <StyledBuildingDeletePopup>
      <p>
        Tem certeza que quer deletar o imóvel de matricula:&nbsp;
        <b>{data.matricula}</b>
      </p>
      <Button
        title="Deletar"
        icon="delete"
        variant="cancel"
        onClick={handleDelete}
      />
    </StyledBuildingDeletePopup>
  );
}

export default BuildingDeletePopup;
