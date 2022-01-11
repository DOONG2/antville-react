import parse, { HTMLReactParserOptions, Text } from 'html-react-parser'
import Autolinker from 'autolinker'
import { useMemo } from 'react'
import { Element } from 'domhandler/lib/node'
import { Link } from 'react-router-dom'
import { STOCK_REGEX, USER_REGEX } from 'src/constants/regex'
import { AT_SIGN, CASH_TAG } from 'src/constants/post'

export default function useMentionToUrl() {
  const autolinker = useMemo(() => new Autolinker(), [])

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element && domNode.attribs)) return

      const text = (domNode.children[0] as Text).data
      const id = domNode.attribs.id

      let path = ''
      if (id === CASH_TAG) path = `/stock/${text.replace('$', '')}`
      if (id === AT_SIGN) path = `/user/${text.replace('@', '')}/profile`

      return <Link to={path}>{text}</Link>
    },
  }

  const mentionToUrl = (value: string) => {
    const linkValue = autolinker.link(value)
    const result = linkValue
      .replace(USER_REGEX, (value) => `<a id=${AT_SIGN}>${value}</a>`)
      .replace(STOCK_REGEX, (value) => `<a id=${CASH_TAG}>${value}</a>`)

    return parse(result, options)
  }

  return { mentionToUrl }
}
