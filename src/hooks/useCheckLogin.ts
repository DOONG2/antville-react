import React from 'react'
import userStorage from '../lib/userStorage'

const useCheckLogin = () => {
  const user = userStorage.get()
  if (user) return true
  else return false
}

export default useCheckLogin
