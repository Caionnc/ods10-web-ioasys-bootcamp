import axios from "axios";

const api = axios.create({
  baseURL: "https://ods10-backend-develop.herokuapp.com/api/documents",
});


export default api;