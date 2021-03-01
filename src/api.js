import axios from "axios";

export const configureAPI = () => {
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    timeout: 1000 * 5,
    withCredentials: true,
  });
  return api;
};
