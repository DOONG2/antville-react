import axios, { AxiosError } from 'axios'
import authStorage from '../authStorage'
import postRefreshToken from './auth/postRefreshToken'

const client = axios.create()

//client.defaults.withCredentials = true
client.defaults.baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://54.180.188.129:3000'
    : 'http://54.180.188.129:3000'

client.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error: Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      const { config, response } = error
      if (response?.status === 401) {
        const data = await postRefreshToken()
        config.headers.Authorization = data
          ? `Bearer ${data.accessToken}`
          : null
        return client.request(config)
      }
      if (response) {
        return Promise.reject(response)
      }
      return Promise.reject(error)
    }
  }
)

client.interceptors.request.use((config) => {
  const token = authStorage.get()
  config.headers.Authorization = token ? `Bearer ${token.accessToken}` : null
  return config
})

export default client
