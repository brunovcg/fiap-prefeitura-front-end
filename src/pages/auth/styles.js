import styled from "styled-components";
import { MobileBreakpoint } from "../../constants";

const StyledAuth = styled.div`
  background-color: var(--primary);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .template-container {
    background-color: var(--light-background);
    width: 90%;
    max-width: 600px;
    padding: 20px 0;

    h2 {
      width: 100%;
      text-align: center;
      margin-top: 30px;
      color: var(--primary);
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .form-container {
      margin-top: 10px;
      min-height: 300px;
      display: flex;
      justify-content: center;
      height: 70%;
    }

    .message-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 0 20px 0;

      @media (max-width: ${`${MobileBreakpoint}px`}) {
        flex-direction: column;
      }

      p {
        font-size: 20px;
        margin-right: 10px;
        font-weight: bold;

        @media (max-width: ${`${MobileBreakpoint}px`}) {
          margin-right: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export default StyledAuth;
