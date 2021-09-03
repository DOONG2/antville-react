import { useHistory } from 'react-router'

export default function useGetTicker() {
  const {
    location: { pathname },
  } = useHistory()
  const paths = pathname.split('/')
  if (!paths || paths.length < 2) return undefined
  return paths[2]
}
