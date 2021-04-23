import { isError, useMutation, useQuery } from 'react-query'
import { User } from '../../api/types'
import postSignUp from '../../api/user/postSignUp'

const usePostSignUp = (input: User) => {
  const result = useMutation('signUp', () => postSignUp(input))

  return result
}

export default usePostSignUp
