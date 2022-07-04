import axios from "axios";
const token = window.localStorage.getItem("jwt");
const client = axios.create({ baseURL: `${process.env.REACT_APP_BASE_LINK}` });

export const request = ({ ...options }) => {
  client.defaults.headers.common.token = `Bearer ${token}`;
  const onSuceess = (response) => response;
  const onError = (error) => {
    return error.response;
  };
  return client(options).then(onSuceess).catch(onError);
};
