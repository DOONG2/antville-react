class NumberFormatUtil {
  usFormatter: Intl.NumberFormat
  krFormatter: Intl.NumberFormat

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
}

export default new NumberFormatUtil()
