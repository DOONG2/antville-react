import parse, { HTMLReactParserOptions, Text } from 'html-react-parser'
import Autolinker from 'autolinker'
import { useMemo } from 'react'
import { Element } from 'domhandler/lib/node'
import { Link } from 'react-router-dom'

export default function MentionToUrl() {
  const autolinker = useMemo(() => new Autolinker(), [])

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.attribs.id === 'cashTag') {
          const text = (domNode.children[0] as Text).data
          return <Link to={`/stock/${text.substr(1)}`}>{text}</Link>
        } else if (domNode.attribs.id === 'atSign') {
          const text = (domNode.children[0] as Text).data
          return <Link to={`/user/${text.substr(1)}/profile`}>{text}</Link>
        }
      }
    },
  }

  const mentionToUrl = (value: string) => {
    const stock_reg = /\$([a-zA-Z가-힣]{2,})/g
    const user_reg = /@([a-zA-Z가-힣0-9_.]{2,})/g
    const linkValue = autolinker.link(value)
    const result = linkValue
      .replace(user_reg, (value) => `<a id="atSign">${value}</a>`)
      .replace(stock_reg, (value) => `<a id="cashTag">${value}</a>`)

    return parse(result, options)
  }

  return { mentionToUrl }
}
