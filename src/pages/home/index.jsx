import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleAuth = () => navigate("auth/");
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleAuth}>Login e Signup</button>
    </div>
  );
}

export default Home;
