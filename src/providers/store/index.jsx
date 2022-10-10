import { createContext, useContext, useState, useEffect } from "react";
import apiService from "../../services/api";
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

  const { services } = apiService(token);

  const {
    personasServices,
    userServices,
    neighborhoodServices,
    buildingsServices,
  } = services;

  const navigate = useNavigate();

  const getPersonas = () => {
    personasServices
      .getAll()
      .then((res) => setPersonas(res.data ?? []))
      .catch((err) => console.log(err));
  };

  const logoutUser = () => {
    sessionStorage.clear();
    setToken("");
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

  const signupUser = (data) => {
    userServices
      .signup(data)
      .then((res) => {
        toast.success("Usuário criado");
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === HTTPStatusCode.Conflict) {
          toast.error("CPF já cadastrado");
        }
      });
  };

  const createBuilding = (payload) => {
    buildingsServices.create(payload).then((res) => {
      setAllUserBuildings([res.data, ...userBuildings]);
      toast.success("Imóvel Adicionado");
    });
  };

  const getAllNeighborhood = () => {
    neighborhoodServices.getAll().then((res) => setNeighborhood(res.data));
  };

  const getAllUserBuildings = () => {
    buildingsServices
      .getAllByUser()
      .then((res) => setAllUserBuildings(res.data));
  };

  const getUserInfo = () => {
    userServices.getOne().then((res) => setUser(res.data));
  };

  const deleteBuilding = (matricula, callbackSuccess = () => {}) => {
    buildingsServices.delete(matricula).then((res) => {
      toast.success("Imóvel deletado");
      callbackSuccess();
      const filteredBuilding = userBuildings.filter(
        (item) => item.matricula !== matricula
      );
      setAllUserBuildings(filteredBuilding);
    });
  };

  const updateBuilding = (matricula, payload) => {
    buildingsServices.update(matricula, payload).then((res) => {
      toast.success("Imóvel atualizado");
      const newList = [...userBuildings];
      let updatedBuilding = userBuildings.find(
        (item) => item.matricula === matricula
      );
      const updatedBuildingIndex = newList.findIndex(
        (item) => item.matricula === updatedBuilding.matricula
      );
      updatedBuilding = { ...updatedBuilding, ...payload };
      newList[updatedBuildingIndex] = updatedBuilding;
      setAllUserBuildings(newList);
    });
  };

  useEffect(() => {
    getPersonas();
    getAllNeighborhood();
  }, []);

  useEffect(() => {
    if (userId) {
      getAllUserBuildings();
    }
    const userLoaded = !!Object.keys(user).length;
    if (userId && !userLoaded) {
      getUserInfo();
    }
  }, [user, userId]);

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
        createBuilding,
        userId,
        token,
        deleteBuilding,
        updateBuilding,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
