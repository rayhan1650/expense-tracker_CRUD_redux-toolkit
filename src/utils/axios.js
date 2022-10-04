import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://lwsredux.herokuapp.com",
});
export default axiosInstance;
