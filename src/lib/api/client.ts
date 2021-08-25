import axios, { AxiosError } from 'axios'
import userSlice from '../../reducers/Slices/user'
import store from '../../store'
import authStorage from '../authStorage'
import postRefreshToken from './auth/postRefreshToken'

const client = axios.create()

//client.defaults.withCredentials = true
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL

client.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error: Error | AxiosError) {
    if (axios.isAxiosError(error)) {
      const { config, response } = error
      if (response?.status === 401) {
        const token = authStorage.get()
        if (!token?.refreshToken) {
          logOut()
        } else {
          const refreshToken = token.refreshToken
          try {
            const data = await postRefreshToken(refreshToken)
            authStorage.set({
              refreshToken,
              accessToken: response.data.accessToken,
            })
            if (data.accessToken) {
              config.headers.Authorization = `Bearer ${data.accessToken}`
            }
            return client.request(config)
          } catch (err) {
            if (axios.isAxiosError(err)) {
              if (err.response?.status === 401) {
                logOut()
              }
            }
          }
        }
      }
      if (response) {
        return Promise.reject(response)
      }
      return Promise.reject(error)
    }
  }
)

function logOut() {
  const { setUserState } = userSlice.actions
  store.dispatch(setUserState(null))
}

client.interceptors.request.use((config) => {
  const token = authStorage.get()
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`
  }
  return config
})

export default client
