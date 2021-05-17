import axios from 'axios'

const client = axios.create()

//client.defaults.withCredentials = true
client.defaults.baseURL = 'https://g.tenor.com/v1'
client.defaults.params = {
  key: process.env.TENOR_API_KEY,
}

export default client
