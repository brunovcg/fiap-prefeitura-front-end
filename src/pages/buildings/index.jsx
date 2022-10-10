import StyledBuildings from "./styles";
import BuildingList from "./templates/buildings-list";
import { ButtonLogout } from "../../components";

function Buildings() {
  return (
    <StyledBuildings>
      <div className="buildings-container">
        <ButtonLogout injectClass="logout-buildings" />
        <h2>Imóveis e Impostos</h2>
        <BuildingList />
      </div>
    </StyledBuildings>
  );
}

export default Buildings;
