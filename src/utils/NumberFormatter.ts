import { UTCTimestamp } from 'lightweight-charts'

class NumberFormatUtil {
  usFormatter: Intl.NumberFormat
  krFormatter: Intl.NumberFormat
  fullDateFormatter: Intl.DateTimeFormat
  timeFormatter: Intl.DateTimeFormat
  monthFormatter: Intl.DateTimeFormat

  constructor() {
    this.usFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
    })
    this.krFormatter = new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    })
    this.fullDateFormatter = new Intl.DateTimeFormat(navigator.language, {
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      month: 'short',
      day: 'numeric',
    })
    this.timeFormatter = new Intl.DateTimeFormat(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
    })
    this.monthFormatter = new Intl.DateTimeFormat(navigator.language, {
      month: 'short',
      day: 'numeric',
      year: '2-digit',
    })
  }

  format(isUSD: boolean, latest: number, withCurrency: boolean) {
    let formattedString
    if (isUSD) {
      formattedString = this.usFormatter.format(latest)
    } else {
      formattedString = this.krFormatter.format(latest)
    }
    if (!withCurrency) {
      formattedString = formattedString.substring(1)
    }
    return formattedString
  }

  fullTimeFormat(time: UTCTimestamp) {
    const date = new Date(time as number)
    return this.fullDateFormatter.format(date)
  }

  timeFormat(time: UTCTimestamp) {
    const date = new Date(time as number)
    return this.timeFormatter.format(date)
  }

  monthFormat(time: UTCTimestamp) {
    const date = new Date(time as number)
    return this.monthFormatter.format(date)
  }
}

export default new NumberFormatUtil()
