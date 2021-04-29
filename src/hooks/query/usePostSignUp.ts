import { isError, useMutation, useQuery } from 'react-query'
import postSignUp from '../../api/user/postSignUp'
import { postSignUpRequest } from '../../api/user/types'

const usePostSignUp = (input: postSignUpRequest) => {
  const result = useMutation('signUp', () => postSignUp(input))

  return result
}

export default usePostSignUp
