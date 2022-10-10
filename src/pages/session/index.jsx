import { useStore } from "../../providers/store";
import { useNavigate } from "react-router-dom";
import { ButtonLogout } from "../../components";

function Session() {
  const navigate = useNavigate();
  const { user } = useStore();

  const handleNavigateSession = () => navigate("buildings/");

  return (
    <div>
      <ButtonLogout />
      <h2>Session</h2>
      <p>Bem vindo: {user.name} </p>
      <button onClick={handleNavigateSession}>Meus Imóveis</button>
    </div>
  );
}

export default Session;
