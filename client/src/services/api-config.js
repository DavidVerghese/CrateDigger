import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3000"

// })

const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://git.heroku.com/cratedigger2-api.git/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})

export default api;
