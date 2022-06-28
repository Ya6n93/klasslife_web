import axios from 'axios';
import history from '@/router/browserHistory';
import { getAccessToken } from '@/utils/access_token';

const iaxios = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

iaxios.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const accessToken = getAccessToken();

  newConfig.headers.Authorization = `Bearer ${accessToken}`;

  return newConfig;
});

// Un interceptor pour un refresh Token ???

export default iaxios;
