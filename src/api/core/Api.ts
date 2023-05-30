import axios from 'axios';
import { API_URL } from 'constant';

const Api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default Api;
