import styled from "styled-components";
import { MobileBreakpoint } from "../../../../constants";

const StyledBuilingRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid var(--border);
  padding: 10px 20px;

  @media (max-width: ${`${MobileBreakpoint}px`}) {
    flex-direction: column;
    width: 100%;
    padding: 5px;
  }

  .building-row-info {
    display: flex;
    gap: 10px;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      flex-direction: column;
      width: 100%;
    }
  }

  .building-row-buttons {
    display: flex;
    gap: 10px;
  }
`;

export default StyledBuilingRow;
