import StyledButtonLogout from "./styles";
import { useStore } from "../../providers/store";
import { Button } from "../";

function ButtonLogout({injectClass = ""}) {
  const { logoutUser } = useStore();

  const handlelogout = () => {
    logoutUser();
  };

  return (
    <StyledButtonLogout>
      <Button className={injectClass} icon="logout" variant="cancel" title="Logout" onClick={handlelogout} />
    </StyledButtonLogout>
  );
}

export default ButtonLogout;
