import React from 'react'
import { Route, useParams } from 'react-router-dom'
import MainTemplate from '../../components/main/MainTemPlate'
import useGetStock from './hooks/useGetStock'
import StockDetailPage from './StockDetailPage'
import StockNotFound from './StockNotFound'

export default function StockPage() {
  const { ticker } = useParams<{ ticker: string }>()
  const { avStock } = useGetStock(ticker)

  if (!avStock?.stock)
    return (
      <>
        <MainTemplate
          children={
            <>
              <StockNotFound />
            </>
          }
        ></MainTemplate>
      </>
    )

  return (
    <MainTemplate
      children={
        <>
          <Route
            path={['/stock/:ticker']}
            component={() => <StockDetailPage avStock={avStock} />}
            exact
          />
        </>
      }
    />
  )
}
