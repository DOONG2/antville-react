import React from 'react'
import HomeStockBar from '../../components/stock/PopularStock'
import MainTemplate from '../../components/main/MainTemPlate'

export default function UserEditPage() {
  return <MainTemplate children={<HomeStockBar />} />
}
