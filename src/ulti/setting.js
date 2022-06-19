import axios from "axios";
export const GROUPID = 'GP01';

export const TOKEN_CYBERSOFT =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiIgSmF2YSAxNyIsIkhldEhhblN0cmluZyI6IjI4LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MjE4NTYwMDAwMCIsIm5iZiI6MTY0ODY1OTYwMCwiZXhwIjoxNjcyMzMzMjAwfQ.ZPHRieXZ4lo1gS8n_8hr2L2t6c5fI4vZaAbSKADsCH0";

export const TOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";
export const DOMAIN = "https://elearningnew.cybersoft.edu.vn";
//set up axios interceptor
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 3000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      Authorization : 'Bearer ' + localStorage.getItem(TOKEN),
      TokenCybersoft: TOKEN_CYBERSOFT,
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
