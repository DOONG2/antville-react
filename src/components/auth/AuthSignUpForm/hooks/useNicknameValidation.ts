import { useCallback, useState } from 'react'
import checkNickname from '../../../../lib/api/user/checkNickname'
import { debounceCallback } from '../../../../lib/utils'
import {
  checkNicknameLength,
  checkNicknameRegex,
} from '../../../../lib/validator'

export default function useNicknameValidation() {
  const [nicknameError, setNicknameError] = useState<string>()
  const [isNicknameValid, setIsNicknameValid] = useState(false)

  const validateNickname = useCallback((value: string) => {
    setNicknameError(undefined)
    setIsNicknameValid(false)
    debounceCheckNickname(value)
  }, [])

  const debounceCheckNickname = useCallback(
    debounceCallback(async (value: string) => {
      if (!checkNicknameLength(value) || !checkNicknameRegex(value)) {
        setNicknameError('유효한 닉네임이 아닙니다.')
      } else {
        const result = await checkNickname(value)
        if (!result.available) {
          setNicknameError('이미 존재하는 닉네임 입니다.')
        } else {
          setIsNicknameValid(true)
        }
      }
    }, 500),
    []
  )

  const setSignUpNicknameError = (error: string) => {
    setIsNicknameValid(false)
    setNicknameError(error)
  }

  return {
    nicknameError,
    isNicknameValid,
    validateNickname,
    setSignUpNicknameError,
  }
}
