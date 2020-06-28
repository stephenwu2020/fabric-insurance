import Vue from 'vue'
import axios from 'axios'

let baseURL = ''
switch (process.env.NODE_ENV) {
  case 'production':
    baseURL = 'http://localhost:8000/api/v1'
    break
  default:
    baseURL = 'http://localhost:8000/api/v1'
    break
}

const instance = axios.create({ baseURL })

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    throw error
  })

Vue.prototype.$axios = instance

export default instance