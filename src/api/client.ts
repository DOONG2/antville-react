import axios from 'axios'

const client = axios.create()

//client.defaults.withCredentials = true
client.defaults.baseURL = process.env.REACT_APP_SERVER_URL

export default client
