import StyledRegulamentation from "../news/styles";

function Regulamentation({ navigate }) {
  return (
    <StyledRegulamentation>
      <h2>Regulamentação</h2>
      <button onClick={navigate}>Meus Imóveis</button>
    </StyledRegulamentation>
  );
}

export default Regulamentation;
