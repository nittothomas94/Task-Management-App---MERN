import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 150000,
});

export default customisedAxios;
