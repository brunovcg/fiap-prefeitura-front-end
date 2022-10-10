import StyledTaxes from "./styles";

function Taxes({ navigate }) {
  return (
    <StyledTaxes>
      <h2>Impostos</h2>
      <button onClick={navigate}>Meus Imóveis</button>
    </StyledTaxes>
  );
}

export default Taxes;
