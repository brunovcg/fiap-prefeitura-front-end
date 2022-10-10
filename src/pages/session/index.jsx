import { useStore } from "../../providers/store";
import { useNavigate } from "react-router-dom";
import { ButtonLogout } from "../../components";
import { Taxes, Regulamentation, News } from "./views";
import StyledSession from "./styles";
import { formatDate } from "../../helpers/date";

function Session() {
  const navigate = useNavigate();
  const { user } = useStore();

  const handleNavigateSession = () => navigate("buildings/");

  const viewSelector = {
    1: <Taxes navigate={handleNavigateSession} />,
    2: <News navigate={handleNavigateSession} />,
    3: <Regulamentation navigate={handleNavigateSession} />,
  };
  const viewRenderer = viewSelector[user.persona];

  const today = formatDate(new Date());

  return (
    <StyledSession>
      <div className="session-header">
        <p className="session-status">
          <b>Sessão:</b> Ativa
        </p>
        <p className="session-user">
          <b>Bem vindo:</b> {user.name}
        </p>
        <p>{today}</p>
        <h2>Página do cidadão</h2>
        <ButtonLogout injectClass="session-logout" />
      </div>
      <div className="session-renderer">{viewRenderer}</div>
    </StyledSession>
  );
}

export default Session;
