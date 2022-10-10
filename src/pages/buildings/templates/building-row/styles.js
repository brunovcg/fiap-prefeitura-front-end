import styled from "styled-components";
import { MobileBreakpoint } from "../../../../constants";

const StyledBuilingRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid var(--border);
  padding: 10px 20px;
  width: 100%;
  position: relative;

  @media (max-width: ${`${MobileBreakpoint}px`}) {
    flex-direction: column;
    width: 100%;
    padding: 5px;
  }

  .building-row-info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      flex-direction: column;
      width: 100%;
    }
  }

  .building-row-buttons {
    display: flex;
    gap: 20px;
    position: absolute;
    right: 0;
    margin-right: 15px;

    @media (max-width: ${`${MobileBreakpoint}px`}) {
      height: 100%;
      top:0 ;
      display: flex;
      align-items: center;
    }
  }
`;

export default StyledBuilingRow;
