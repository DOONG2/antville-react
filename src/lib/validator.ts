import { debounce } from 'lodash'
import checkEmail from '../api/user/checkEmail'
import checkNickname from '../api/user/checkNickname'

export const check_num = /[0-9]/
export const check_eng = /[a-zA-Z]/
export const check_spc = /[~!@#$%^&*()_+|<>?:{}]/
export const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/

export const check_nickname =
  /^(?!.*\.\.)(?!.*\.$)[0-9a-zA-Z_가-힣][a-zA-Z0-9_.가-힣]{1,27}/g

export const cacheTagRegex = /\$([a-zA-Z가-힣]{2,})/g

export const checkNicknameLength = (nickname: string | undefined) => {
  if (nickname === undefined) return false
  let nickLength = 0
  for (let i = 0; i < nickname.length; i++) {
    const nick = nickname.charAt(i)
    if (escape(nick).length > 4) {
      nickLength += 2
    } else {
      nickLength += 1
    }
  }
  if (nickLength >= 3 && nickLength <= 29) {
    return true
  } else {
    return false
  }
}

const debounceNickNameCheck = debounce(
  (nickname: string) => checkNickname(nickname),
  500
)

export const isTakenNickName = async (nickname: string | undefined) => {
  if (nickname === undefined) return true
  try {
    const result = await debounceNickNameCheck(nickname)
    if (result?.available === true) return true
    else return false
  } catch (error) {
    if (error.data.errorCode === 601) return false
  }

  return true
}

const debounceEmailCheck = debounce((email: string) => checkEmail(email), 500)

export const isTakenEmail = async (email: string | undefined) => {
  if (email === undefined) return true
  try {
    const result = await debounceEmailCheck(email)
    if (result?.available === true) return true
    else return false
  } catch (error) {
    if (error.data.errorCode === 600) return false
  }
  return true
}
