import axios from "axios";

function useAPI(token) {
  const configs = {
    headers: {
      Authorization: "Token " + token,
    },
  };

  const settings = {
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}api/`,
    endpoints: {
      user: {
        login: "login/",
        signup: "signup/",
        getOne: (userId) => `user/${userId}`,
      },
      buildings: (userId) => `buildings/${userId}`,
      neighborhood: "buildings/neighborhood/",
      personas: "personas/",
    },
  };
  const api = () => {
    return axios.create({ baseURL: settings.baseUrl });
  };

  const apiServices = {
    userServices: {
      login: (payload) => api().post(settings.endpoints.user.login, payload),
      signup: (payload) => api().post(settings.endpoints.user.signup, payload),
      getOne: (userId) =>
        api().get(settings.endpoints.user.getOne(userId), configs),
    },
    buildingsServices: {
      create: (payload) =>
        api().post(settings.endpoints.buildings, payload, configs),
      update: (payload) =>
        api().patch(settings.endpoints.buildings, payload, configs),
      delete: (payload) =>
        api().delete(settings.endpoints.buildings, payload, configs),
      getAllByUser: (userId) =>
        api().get(settings.endpoints.buildings(userId), configs),
    },
    neighborhoodServices: {
      getAll: () => api().get(settings.endpoints.neighborhood),
    },
    personasServices: {
      getAll: () => api().get(settings.endpoints.personas),
    },
  };

  return { apiServices };
}

export default useAPI;
