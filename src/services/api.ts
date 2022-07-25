import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.2:10000/rest/OXEVT001/',
  headers: {
    'Content-Type': 'application/json',
    'Token': 'zghMwfpkQVcLT%kFfQw&WSBW2%Pph3^o'
  },
});


export default api
