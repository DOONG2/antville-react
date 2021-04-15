import { atom, useRecoilState } from 'recoil'

const loginFormState = atom<boolean>({
  key: 'loginFormState',
  default: false,
})

const signUpFormState = atom<boolean>({
  key: 'signUpFormState',
  default: false,
})

export function useLoginFormState() {
  return useRecoilState(loginFormState)
}

export function useSignUpFormState() {
  return useRecoilState(signUpFormState)
}
