import { useHistory } from 'react-router-dom'
import {
  activated_recommend,
  activated_user,
  activated_user_like,
} from '../../../lib/variable'

const useGetRoutePath = () => {
  const history = useHistory()
  const paths = history.location.pathname.split('/')

  if (paths[1] === '') return activated_recommend
  else if (paths[1] === 'user') {
    if (paths.length === 4) return activated_user
    else return activated_user_like
  } else return paths[1]
}

export default useGetRoutePath
