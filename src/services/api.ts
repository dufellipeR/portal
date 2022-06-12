import axios from 'axios';


const api = axios.create({
  baseURL: 'http://143.0.142.19:10000/rest/OXEVT003/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api
