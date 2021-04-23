import axios, { AxiosError } from 'axios'

const client = axios.create()

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

export default client
