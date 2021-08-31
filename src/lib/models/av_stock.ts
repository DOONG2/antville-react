import { StockPriceInfo } from './../api/types'
import { Stock } from '../api/types'
import { blue050, grey060, red050 } from '../styles/colors'
import NumberFormatUtil from '../utils/number_format'

class AVStock {
  stock: Stock
  priceInfo?: StockPriceInfo

  id!: number
  title!: string
  description!: string
  currency!: string
  sign!: string
  textColor!: string

  latest?: string
  change?: string
  changePercent?: string
  volume?: string

  constructor(stock: Stock, priceInfo?: StockPriceInfo) {
    this.stock = stock
    this.priceInfo = priceInfo
    this.setStock()
    if (this.hasPrice) {
      this.setPriceInfo()
    }
  }

  get hasPrice(): boolean {
    if (
      this.priceInfo &&
      this.priceInfo.change !== undefined &&
      this.priceInfo.changePercentage !== undefined &&
      this.priceInfo.latest &&
      this.priceInfo.volume
    ) {
      return true
    }
    return false
  }

  setStock() {
    this.id = this.stock.id
    if (this.stock.exchange.countryCode === 'US') {
      this.currency = '$'
      this.title = this.stock.symbol
      this.description = this.stock.krName
    } else {
      this.currency = '￦'
      this.title = this.stock.krName
      this.description = this.stock.symbol
    }
  }

  setPriceInfo() {
    let isUSD: boolean
    if (this.stock.exchange.countryCode !== 'KR') {
      isUSD = true
      this.changePercent = Math.abs(this.priceInfo!.changePercentage!).toFixed(
        2
      )
      this.volume = this.priceInfo!.volume!.toFixed(0)
    } else {
      isUSD = false
      if (this.stock.type === 'CRYPTO') {
        this.changePercent = Math.abs(
          this.priceInfo!.changePercentage! * 100
        ).toFixed(2)
        this.change = Math.abs(this.priceInfo!.change!).toFixed(0)
      } else {
        this.change = Math.abs(this.priceInfo!.change!).toFixed(0)
        this.changePercent = Math.abs(
          this.priceInfo!.changePercentage!
        ).toFixed(2)
      }
      this.volume = this.priceInfo!.volume!.toFixed(3)
    }

    this.change = NumberFormatUtil.format(
      isUSD,
      Math.abs(this.priceInfo!.change!),
      false
    )
    this.latest = NumberFormatUtil.format(isUSD, this.priceInfo!.latest!, true)

    if (this.priceInfo!.change! > 0) {
      this.sign = '+'
      this.textColor = red050
    } else if (this.priceInfo!.change === 0) {
      this.sign = ''
      this.textColor = grey060
    } else {
      this.sign = '-'
      this.textColor = blue050
    }
  }
}

export default AVStock
