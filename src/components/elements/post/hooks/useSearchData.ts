import postSearchStock from 'src/api/stock/postSearchStock'
import getSearchUser from 'src/api/user/getSearchUser'

export default function useSearchData() {
  // 게시글 데이터 API 콜
  const postQueryStock = async (query: string) => {
    const result = await postSearchStock(query)
    return result.map(({ id, krName, symbol, cashTagName }) => ({
      id,
      value: krName,
      subTitle: symbol,
      renderString: cashTagName,
    }))
  }
  // 유저 데이터 API 콜
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
