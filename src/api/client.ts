import axios, { AxiosError } from 'axios'
import authStorage from '../lib/authStorage'
import refreshToken from './auth/refreshToken'

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
  async function (error: AxiosError) {
    if (error.code === '401') {
      const data = await refreshToken()
      error.config.headers.Authorization = data
        ? `Bearer ${data.accessToken}`
        : null
      return client.request(error.config)
    }
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
