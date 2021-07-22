import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/ko'

interface Props {
  time: string
}

export default function MonthDate({ time }: Props) {
  return <Moment format="YYYY년 M월">{time}</Moment>
}
