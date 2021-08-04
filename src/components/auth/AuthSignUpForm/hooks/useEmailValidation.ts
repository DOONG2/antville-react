import { useCallback, useState } from 'react'
import checkEmail from '../../../../lib/api/user/checkEmail'
import { debounceCallback } from '../../../../lib/utils'
import { validateEmailRegex } from '../../../../lib/validator'

export default function useEmailValidation() {
  const [emailError, setEmailError] = useState<string>()
  const [isEmailValid, setIsEmailValid] = useState(false)

  const validateEmail = useCallback((value: string) => {
    setEmailError(undefined)
    setIsEmailValid(false)
    debounceCheckEmail(value)
  }, [])

  const debounceCheckEmail = useCallback(
    debounceCallback(async (value: string) => {
      if (!validateEmailRegex(value)) {
        setEmailError('유효한 이메일이 아닙니다.')
      } else {
        const result = await checkEmail(value)
        if (!result.available) {
          setEmailError('중복된 이메일 입니다.')
        } else {
          setIsEmailValid(true)
        }
      }
    }, 500),
    []
  )

  const setSignUpEmailError = (error: string) => {
    setIsEmailValid(false)
    setEmailError(error)
  }

  return { emailError, isEmailValid, validateEmail, setSignUpEmailError }
}
