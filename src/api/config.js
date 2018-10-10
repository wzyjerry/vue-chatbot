import axios from "axios";

const ajax = axios.create({
  baseURL: "http://api"
});

export default ajax;
