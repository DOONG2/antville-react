import axios, { AxiosError } from 'axios'
import authStorage from '../lib/authStorage'

const client = axios.create()

//client.defaults.withCredentials = true
client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://antvile.api.com'

client.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError) {
    if (error.response) {
      return Promise.reject(error.response)
    }
    return Promise.reject(error)
  }
)

client.interceptors.request.use((config) => {
  const token = authStorage.get()
  config.headers.Authorization = token ? `Bearer ${token.accessToken}` : null
  return config
})

export default client
