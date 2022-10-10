import StyledButton from "./styles";
import { Icon } from "../../components";
import React from "react";

function Button({ title, injectClass, icon, ...rest }) {
  return (
    <div className={injectClass ?? ""}>
      <StyledButton {...rest}>
        {icon && <Icon icon={icon} />}
        {title}
      </StyledButton>
    </div>
  );
}

export default Button;
