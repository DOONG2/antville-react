export default function useParsePost() {
  const getBodyOnlyText = (body: string) => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(body, 'text/html')
    const elements = doc.querySelectorAll('p')

    let onlyText = ''
    elements.forEach((el, index) => {
      const isEnded = index === elements.length - 1
      onlyText += el.innerText
      if (!isEnded) onlyText += '\n'
    })
    return onlyText
  }
  return { getBodyOnlyText }
}
