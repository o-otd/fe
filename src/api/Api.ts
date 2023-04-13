import axios from 'axios';

const API_URL = 'http://localhost';

const Api = axios.create({
  baseURL: API_URL,
});

export default Api;
