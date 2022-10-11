import styled from "styled-components";
import { MobileBreakpoint } from "../../constants";

const StyledSession = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;

  .session-header {
    width: 100%;
    height: 15%;
    background-color: blue;
    border-bottom: 10px solid var(--secondary);
    color: var(--light-font);
    padding: 20px 20px 0 20px;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      height: 20%;
    }

    .session-status {
      color: var(--confirm);
    }
    .session-user {
      margin: 5px 0;
    }

    h2 {
      width: 100%;
      text-align: center;
      font-size: 25px;
      margin: 10px 0 0 0;
    }

    .session-logout {
      position: absolute;
      top: 0;
      right: 0;
      margin: 10px 10px 0 0;
    }
  }

  .session-renderer {
    min-height: 85%;
    overflow-y: auto;
  }

  @media (max-width: ${`${MobileBreakpoint}px`}) {
    min-height: 80%;
  }
`;

export default StyledSession;
