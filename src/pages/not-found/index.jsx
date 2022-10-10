import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      NotFound!
      <button onClick={handleBack}>Go home</button>
    </div>
  );
}

export default NotFound;
