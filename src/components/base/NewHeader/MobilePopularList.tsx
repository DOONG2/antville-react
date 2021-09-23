import useStockPopularQuery from '../../stock/hooks/useStockPopularQuery'
import { WatchListStockGroup } from '../../stock/WatchlistStockGroup'

export default function MobilePopularList() {
  const { stocks } = useStockPopularQuery()
  if (!stocks) return <></>
  return (
    <>
      {stocks?.map((stock) => (
        <WatchListStockGroup
          key={`${stock.id}-search-popular-stock-preivew`}
          stock={stock}
        />
      ))}
    </>
  )
}
