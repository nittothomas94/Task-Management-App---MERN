import axios from 'axios';

const customisedAxios = axios.create({
  baseURL: 'https://task-management-app-mern-r92r.onrender.com/api',
  timeout: 150000,
});

export default customisedAxios;
