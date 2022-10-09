import StyledBuilingList from "./styles";
import { useStore } from "../../../../providers/store";
import BuilingRow from "../building-save-popup";
import { Button } from "../../../../components";

function BuildingList() {
  const { userBuildings } = useStore();

  const addButtonTitle = (
    <div>
      <span>Adicione um imóvel</span>
    </div>
  );

  return (
    <StyledBuilingList>
      <Button variant="confirm" icon="add" title={addButtonTitle} />
      {userBuildings?.map((item) => (
        <BuilingRow key={item.id} item={item} />
      ))}
    </StyledBuilingList>
  );
}

export default BuildingList;
