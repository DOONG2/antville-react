import client from '../client'
import { postSignUpRequest } from './types'

const postSignUp = async (input: postSignUpRequest) => {
  await client.post('/user/sign-up', input)
}

export default postSignUp
