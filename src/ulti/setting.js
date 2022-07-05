import axios from "axios";
export const GROUPID = "GP01";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiIgSmF2YSAxNyIsIkhldEhhblN0cmluZyI6IjI4LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MjE4NTYwMDAwMCIsIm5iZiI6MTY0ODY1OTYwMCwiZXhwIjoxNjcyMzMzMjAwfQ.ZPHRieXZ4lo1gS8n_8hr2L2t6c5fI4vZaAbSKADsCH0";

export const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiR1YiLCJuYmYiOjE2NTYyMjcyMzgsImV4cCI6MTY1NjIzMDgzOH0.h4TiX35o-MT7RQjdmbCZHEPIWDV31jfp7o4GvdzZU6E";
export const USER_LOGIN = "USER_LOGIN";
export const DOMAIN = "https://elearningnew.cybersoft.edu.vn";
//set up axios interceptor
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
});
axios.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization: "Bearer " + TOKEN,
      TokenCybersoft: TOKEN_CYBERSOFT,
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
