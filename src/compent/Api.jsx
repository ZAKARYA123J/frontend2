// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000/api', // Replace with your Express.js backend URL
});

export default api;
