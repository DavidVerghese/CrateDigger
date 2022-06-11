import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3000"

// })

const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://cratedigger.surge.sh/' : 'http://localhost:3000' 

const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  baseURL: baseUrl
})

export default api;
