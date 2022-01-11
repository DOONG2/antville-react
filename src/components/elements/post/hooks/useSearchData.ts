import postSearchStock from 'src/api/stock/postSearchStock'
import getSearchUser from 'src/api/user/getSearchUser'

export default function useSearchData() {
  const postQueryStock = async (query: string) => {
    const result = await postSearchStock(query)
    return result.map(({ id, krName, symbol, cashTagName }) => ({
      id,
      value: krName,
      subTitle: symbol,
      renderString: cashTagName,
    }))
  }

  const getQueryUser = async (query: string) => {
    const result = await getSearchUser(query)
    return result.map(({ id, nickname, profileImg }) => ({
      id,
      value: nickname,
      avartar: profileImg,
    }))
  }

  return { postQueryStock, getQueryUser }
}
