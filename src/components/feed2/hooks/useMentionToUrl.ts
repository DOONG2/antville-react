export default function useMentionToUrl() {
  const mentionToUrl = (value: string) => {
    const stock_reg = /\$([a-zA-Z가-힣]{2,})/g
    const user_reg = /@([a-zA-Z가-힣0-9_.]{2,})/g
    const result = value
      .replace(
        user_reg,
        (value) => `<a href="/user/${value.substr(1)}/profile">${value}</a>`
      )
      .replace(
        stock_reg,
        (value) => `<a href="/stock/${value.substr(1)}">${value}</a>`
      )

    return result
  }

  return { mentionToUrl }
}
