import React from 'react'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: JSX.Element
}

export const Desktop = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 })
  return isDesktop ? children : null
}

export const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 })
  return isMobile ? children : null
}
