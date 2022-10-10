import styled from "styled-components";
import { MobileBreakpoint } from "../../../../constants";

const StyledBuilingList = styled.div`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;
  max-height:80%;
  width: 100%;

  .list {
    overflow-y: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (max-width: ${`${MobileBreakpoint}px`}) {
    width: 100%;
  }
`;

export default StyledBuilingList;
