import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.API_URL!,
  headers: {
    'Api-Key': process.env.API_KEY!,
    'Content-Type': 'application/json',
  },
});

export default api;
