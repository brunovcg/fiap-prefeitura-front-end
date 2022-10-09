import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import useAPI from "../../services/useApi";
import {
  TokenStorageKey,
  HTTPStatusCode,
  UserIdStorageKey,
} from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem(TokenStorageKey)) ?? ""
  );
  const [userId, setUserId] = useState(
    JSON.parse(sessionStorage.getItem(UserIdStorageKey)) ?? ""
  );
  const [user, setUser] = useState({});
  const [neighborhood, setNeighborhood] = useState([]);
  const [userBuildings, setAllUserBuildings] = useState([]);

  const { apiServices } = useAPI(token);

  const {
    personasServices,
    userServices,
    neighborhoodServices,
    buildingsServices,
  } = apiServices;

  const navigate = useNavigate();

  const getPersonas = () => {
    personasServices
      .getAll()
      .then((res) => setPersonas(res.data ?? []))
      .catch((err) => console.log(err));
  };

  const logoutUser = () => {
    sessionStorage.clear();
  };

  const loginUser = (data) => {
    userServices.login(data).then((res) => {
      const { token: userToken, id, ...rest } = res.data;
      sessionStorage.setItem(TokenStorageKey, JSON.stringify(userToken) ?? "");
      sessionStorage.setItem(UserIdStorageKey, JSON.stringify(id) ?? "");
      setUserId(id);
      setToken(userToken);
      setUser({ ...rest });
      navigate("/session");
    });
  };

  const signupUser = (data, callbackSuccess) => {
    userServices
      .signup(data)
      .then((res) => {
        toast.success("Usuário criado");
        callbackSuccess(true);
      })
      .catch((err) => {
        if (err.response.status === HTTPStatusCode.Conflict) {
          toast.error("CPF já cadastrado");
        }
      });
  };

  const getAllNeighborhood = () => {
    neighborhoodServices.getAll().then((res) => setNeighborhood(res.data));
  };

  const getAllUserBuildings = useCallback(() => {
    buildingsServices
      .getAllByUser(userId, token)
      .then((res) => setAllUserBuildings(res.data));
  }, [buildingsServices, userId, token]);

  const getUserInfo = () => {
    userServices.getOne(userId, token).then((res) => setUser(res.data));
  };

  useEffect(() => {
    getPersonas();
    getAllNeighborhood();
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [token]);

  useEffect(() => {
    if (userId) {
      getAllUserBuildings();
    }
  }, [getAllUserBuildings, userId]);

  return (
    <StoreContext.Provider
      value={{
        loginUser,
        signupUser,
        personas,
        logoutUser,
        user,
        neighborhood,
        userBuildings,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
