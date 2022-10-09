import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => `var(--${props.variant})`};
  padding: ${(props) => (props.round ? "20px" : "10px 10px")};
  color: var(--light-font);
  font-size: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  border: none;
  width: ${(props) => (props.round ? "30px" : "fit-content")};
  height: ${(props) => (props.round ? "30px" : "45px")};
  border-radius: ${(props) => (props.round ? "50%" : "8px")};
  :hover {
    opacity: 0.9;
  }
`;

export default StyledButton;
