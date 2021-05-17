import axios from 'axios'

const client = axios.create()

client.defaults.baseURL = 'https://g.tenor.com/v1'
client.defaults.params = {
  key: process.env.REACT_APP_TENOR_API_KEY,
  locale: 'ko',
}

export default client
