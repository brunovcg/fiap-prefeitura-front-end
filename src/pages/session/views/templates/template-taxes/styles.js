import styled from "styled-components";
import { MobileBreakpoint } from "../../../../../constants";

const StyledTemplateTaxes = styled.section`
  padding: 0 20px 30px 20px;
  margin-top: 30px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    margin-bottom: 30px;
    color: var(--primary);
    font-size: 30px;
  }

  .iptu-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      flex-direction: column;
    }

    .button-container {
      .iptu-message {
        font-size: 20px;
        margin-bottom: 30px;
      }
    }

    figure {
      @media (max-width: ${`${MobileBreakpoint}px`}) {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      img {
        @media (max-width: ${`${MobileBreakpoint}px`}) {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
`;

export default StyledTemplateTaxes;
