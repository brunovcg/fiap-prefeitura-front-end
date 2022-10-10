import styled from "styled-components";

const StyledBuildings = styled.div`
  width: 100vw;
  min-height: 200px;
  max-height: 100vh;
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

    .logout-buildings {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px 20px 0 0;
    }

    h2 {
      margin-top: 70px;
      font-size: 35px;
      color: var(--primary);
    }
  }
`;

export default StyledBuildings;
