import axios from "axios";
// import { authInterceptor } from "../shared/interceptor/interceptor.auth";

const client = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL,
   headers: {
      "content-type": "application/json"
   },
   responseType: "json"
});
// client.interceptors.request.use(authInterceptor);

export default client;