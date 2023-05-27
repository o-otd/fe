import axios from 'axios';
import { API_URL } from 'constant';

const Api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default Api;
