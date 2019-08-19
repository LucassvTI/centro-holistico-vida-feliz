import axios from 'axios';

export const email = axios.create({
  baseURL: 'https://us-central1-centroholistico-17a4a.cloudfunctions.net', // enviarEmail
});