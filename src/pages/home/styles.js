import styled from "styled-components";
import logo from "../../assets/images/recife_centro.jpeg";

const StyledHome = styled.div`
  background-image: url(${logo});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .transparent-box {
    background-color: var(--transparent-dark);
    width: 300px;
    min-height: 400px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--light-font);
    padding: 20px;


    .welcome-message {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      margin: 20px;
      color: var(--secondary);
    
    }

    .welcome-instructions{
      text-align: justify;
      margin-bottom: 30px;
      font-weight: bold;
      line-height: 1.3;
    }
  }
`;

export default StyledHome;
