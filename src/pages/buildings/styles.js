import styled from "styled-components";

const StyledBuildings = styled.div`
  width: 100vw;
  min-height: 200px;

  background-color: var(--primary);
  display: flex;
  justify-content: center;

  .buildings-container {
    width: 93%;
    max-width: 800px;
    background-color: var(--light-background);
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-top: 40px;
      font-size: 35px;
      color: var(--primary);
    }
  }
`;

export default StyledBuildings;
