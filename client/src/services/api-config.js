import axios from 'axios';

// const api = axios.create({
//   baseURL: "http://localhost:3000"

// })



const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://crate-digger-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})

export default api;
