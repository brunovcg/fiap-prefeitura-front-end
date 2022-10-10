import StyledNews from "./styles";

function News({ navigate }) {
  return (
    <StyledNews>
      <h2>NEWS</h2>
      <button onClick={navigate}>Meus Imóveis</button>
    </StyledNews>
  );
}

export default News;
