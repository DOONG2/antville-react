import postSearchStock from 'src/api/stock/postSearchStock'
import getSearchUser from 'src/api/user/getSearchUser'

export default function useSearchData() {
  const postQueryStock = async (query: string) => {
    const result = await postSearchStock(query)
    return result.map((stock) => ({
      id: stock.id,
      value: stock.krName,
      subTitle: stock.symbol,
      renderString: stock.cashTagName,
    }))
  }

  const getQueryUser = async (query: string) => {
    const result = await getSearchUser(query)
    return result.map((user) => ({
      id: user.id,
      value: user.nickname,
      avartar: user.profileImg,
    }))
  }

  return { postQueryStock, getQueryUser }
}
