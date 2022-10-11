import styled from "styled-components";
import { MobileBreakpoint } from "../../../../../constants";

const StyledTemplateRegulations = styled.section`
  padding: 0 20px 30px 20px;
  margin-top: 30px;
  border-bottom: 1px solid var(--border);

  h2 {
    margin-bottom: 30px;
    color: var(--primary);
    font-size: 30px;
  }

  .regulations-link {
    display: flex;
    justify-content: space-between;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      flex-direction: column;
    }

    ul {
      li {
        margin-top: 15px;
      }
    }
    figure {
      width: 536px;
      @media (max-width: ${`${MobileBreakpoint}px`}) {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      img {
        width: 100%;
        @media (max-width: ${`${MobileBreakpoint}px`}) {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
`;

export default StyledTemplateRegulations;
