import StyledButton from "./styles";
import { Icon } from "../../components";

function Button({ title, icon, ...rest }) {
  return (
    <StyledButton {...rest}>
      {icon && <Icon icon={icon} />}
      {title}
    </StyledButton>
  );
}

export default Button;
