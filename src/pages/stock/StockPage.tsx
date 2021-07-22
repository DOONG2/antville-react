import React from 'react'
import { Route, useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import PostForm from '../../components/post/PostForm'
import StockInfo from '../../components/stock/StockInfo'
import useGetStock from './hooks/useGetStock'
import StockDetailPage from './StockDetailPage'

export default function StockPage() {
  const { ticker } = useParams<{ ticker: string }>()
  const { stock } = useGetStock(ticker)

  if (!stock?.stock) return <></>

  return (
    <MainTemplate
      children={
        <>
          <StockInfo stock={stock} />
          <PostForm />
          <Route
            path={['/stock/:ticker']}
            component={() => <StockDetailPage stock={stock.stock} />}
            exact
          />
        </>
      }
    />
  )
}
