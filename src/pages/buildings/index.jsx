import StyledBuildings from "./styles";
import BuildingList from "./templates/buildings-list"

function Buildings() {

 
  return (
    <StyledBuildings>
      <div className="buildings-container">
        <h2>Imóveis e Impostos</h2>
        <BuildingList/>
      </div>
    </StyledBuildings>
  );
}

export default Buildings;
