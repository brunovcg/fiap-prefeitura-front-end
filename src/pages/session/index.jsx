import { useStore } from "../../providers/store";
import { useNavigate } from "react-router-dom";
function Session() {
  const navigate = useNavigate();
  const { personas, user, neighborhood, userBuildings } = useStore();

  const handleNavigateSession = () => navigate("buildings");
  return (
    <div>
      <button onClick={handleNavigateSession}>xxx</button>
    </div>
  );
}

export default Session;
