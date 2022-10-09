import styled from "styled-components";
import { MobileBreakpoint } from "../../../../constants";

const StyledBuilingList = styled.div`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${`${MobileBreakpoint}px`}) {
    width: 100%;
  }
`;

export default StyledBuilingList;
