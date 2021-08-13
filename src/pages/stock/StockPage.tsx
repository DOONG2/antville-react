import React from 'react'
import { useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import useGetStock from './hooks/useGetStock'
import StockDetailPage from './StockDetailPage'
import StockNotFound from './StockNotFound'

export default function StockPage() {
  const { ticker } = useParams<{ ticker: string }>()
  const { avStock, loading } = useGetStock(ticker)

  return (
    <>
      <MainTemplate
        children={
          <>
            {!loading &&
              (avStock ? (
                <StockDetailPage avStock={avStock!} />
              ) : (
                <StockNotFound />
              ))}
          </>
        }
      ></MainTemplate>
    </>
  )
}
