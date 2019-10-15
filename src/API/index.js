import axios from 'axios';

export const baseUrlHttp = process.env.REACT_APP_BASE_BACKEND_URL;
export const apiUrlHttp = process.env.REACT_APP_API_URL;
export const googleLoginRedirect = process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT;

export const django_client_id = process.env.REACT_APP_DJANGO_CLIENT_ID;
export const django_client_secret = process.env.REACT_APP_DJANGO_CLIENT_SECRET;

export const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export function setToken(token){
    axios.defaults.headers.common['Authorization'] =
      `${token.token_type} ${token.access_token}`;
      apiCon.defaults.headers.common['Authorization'] =
      `${token.token_type} ${token.access_token}`;
}

export var apiCall = axios.create(
  {
      baseURL: apiUrlHttp
  }
)

export const apiCon = axios.create({
  baseURL: apiUrlHttp,
  timeout: 5000,
})

export default axios.create({
  baseURL: baseUrlHttp
})
