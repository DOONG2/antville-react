import debounce from 'lodash.debounce'
import getSearch from '../api/tenor/getSearch'

const debouncedGifSearch = debounce((input: string) => getSearch(input), 500)

export const getGifSearch = async (input: string) => {
  try {
    const result = await debouncedGifSearch(input)
    if (result === undefined) return null
    return result
  } catch (error) {
    if (error.data.errorCode === 600) return null
  }
  return null
}
