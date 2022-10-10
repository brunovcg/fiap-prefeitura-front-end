import axios from "axios";

function apiService(token) {
  const configs = {
    headers: {
      Authorization: "Token " + token,
    },
  };

  const baseURL = `${process.env.REACT_APP_BACKEND_URL}api/`;
  const endpoints = {
    user: {
      login: "login/",
      signup: "signup/",
      getOne: "user/",
    },
    buildings: {
      byUser: "buildings/",
      byMatricula: (matricula) => `buildings/matricula/${matricula}/`,
    },
    neighborhood: "neighborhoods/",
    personas: "personas/",
  };

  const api = () => {
    return axios.create({ baseURL });
  };

  const services = {
    userServices: {
      login: (payload) => api().post(endpoints.user.login, payload),
      signup: (payload) => api().post(endpoints.user.signup, payload),
      getOne: () => api().get(endpoints.user.getOne, configs),
    },
    buildingsServices: {
      create: (payload) =>
        api().post(endpoints.buildings.byUser, payload, configs),
      update: (matricula, payload) =>
        api().patch(
          endpoints.buildings.byMatricula(matricula),
          payload,
          configs
        ),
      delete: (matricula) =>
        api().delete(endpoints.buildings.byMatricula(matricula), configs),
      getAllByUser: () => api().get(endpoints.buildings.byUser, configs),
    },
    neighborhoodServices: {
      getAll: () => api().get(endpoints.neighborhood),
    },
    personasServices: {
      getAll: () => api().get(endpoints.personas),
    },
  };

  return { services };
}

export default apiService;
