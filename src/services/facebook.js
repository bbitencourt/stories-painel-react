import axios from "axios";

const apiFace = axios.create({
  baseURL: "https://graph.facebook.com/v5.0",
});

export default apiFace;
