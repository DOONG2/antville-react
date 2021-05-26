import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/ko'

interface Props {
  time: string
}

export default function MomentDateChage({ time }: Props) {
  return <Moment fromNow>{time}</Moment>
}
