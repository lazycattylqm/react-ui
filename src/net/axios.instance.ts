import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' }
});