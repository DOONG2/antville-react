import axios from 'axios'
import { TENOR_API_KEY } from '../../variable'

const client = axios.create()

client.defaults.baseURL = 'https://g.tenor.com/v1'
client.defaults.params = {
  key: TENOR_API_KEY,
  locale: 'ko',
}

export default client
