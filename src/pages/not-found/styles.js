import styled from "styled-components";
import logo from "../../assets/images/recife_centro.jpeg";
import { MobileBreakpoint } from "../../constants";

const StyledNotFound = styled.div`
  background-image: url(${logo});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--light-font);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  .transparent-message {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--transparent-dark);
    height: fit-content;
    padding: 30px;
    border: 1px solid var(--border);
    border-radius: 8px;
    text-align: justify;
    line-height: 1.5;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      width: 80%;
    }

    h2 {
      font-size: 20px;
      color: var(--secondary);
    }

    .home-button {
      margin: 0 auto;
    }
  }
`;

export default StyledNotFound;
