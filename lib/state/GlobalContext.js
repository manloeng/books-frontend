import { createContext } from "react";
import axios from "axios";

let baseUrl = "";
let globalContext;
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  baseUrl = "http://localhost:3030/api";
}

if (process.env.NODE_ENV === "production") {
  baseUrl = "";

  axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://property-lookout.vercel.app/";
}

globalContext = createContext({ baseUrl });

export default globalContext;
