import axios from "axios";

const settings = {
  baseUrl: process.env.REACT_APP_BACKEND_URL,
  endpoints: {
    user: {
      login: "login/",
      signup: "signup/",
    },
    buildings: "buildings/",
    neighborhood: "neighborhood/"
  },
};

const api = () => {
  return axios.create({ baseURL: settings.baseUrl });
};

export const apiServices = {
  user: {
    login: (payload) => api().post(settings.endpoints.user.login, payload),
    signup: (payload) => api().post(settings.endpoints.user.signup, payload),
  },
  buildings: {
    create: (payload) => api().post(settings.endpoints.buildings, payload),
    update: (payload) => api().patch(settings.endpoints.buildings, payload),
    delete: (payload) => api().delete(settings.endpoints.buildings, payload),
    getAllUserBuildings: (payload) =>
      api().get(settings.endpoints.buildings, payload)
  },
  neighborhood: {
     getAll: () => api().get(settings.endpoints.neighborhood) 
  }
};
