import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--transparent-dark);
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    background-color: var(--light-background);
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 10px;
    width: fit-content;
    min-width: 300px;
    min-height: 200px;
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: 8px;

    .header {
      display: flex;
      align-items: center;
      h2 {
        width: 100%;
        color: var(--primary);
        font-size: 20px;
        margin-top: 15px;
      }

      span {
        margin-left: 30px;
        color: var(--dark-font);
      }
    }

    .content {
      width: 100%;
      margin: 20px 0 10px 0;
    }
  }
`;

export default ModalStyled;
