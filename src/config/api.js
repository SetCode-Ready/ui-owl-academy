import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-owl-academy.herokuapp.com/',
})

export default api;