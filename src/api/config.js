import axios from "axios";
const ajax = axios.create({
  baseURL: "http://166.111.5.228:8765/v1"
});

export default ajax;
