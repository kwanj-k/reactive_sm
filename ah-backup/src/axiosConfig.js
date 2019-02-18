import axios from 'axios';

const BASE_URL = 'https://ah-the-unsullied-staging.herokuapp.com/api/';

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
export default axiosConfig;
