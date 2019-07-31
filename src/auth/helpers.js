import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://jobdroom.herokuapp.com'
})