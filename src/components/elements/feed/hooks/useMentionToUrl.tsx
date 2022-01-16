import parse, { HTMLReactParserOptions, Text } from 'html-react-parser'
import Autolinker from 'autolinker'
import { useMemo } from 'react'
import { Element } from 'domhandler/lib/node'
import { Link } from 'react-router-dom'
import { STOCK_REGEX, USER_REGEX } from 'src/constants/regex'
import { AT_SIGN, CASH_TAG } from 'src/constants/post'

export default function useMentionToUrl() {
  const autolinker = useMemo(() => new Autolinker(), [])

  // 기본 html a태크를 리액트 라우터 Link로 변환하는 옵션
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

  // body의 멘션데이터 파싱 함수
  const mentionToUrl = (value: string) => {
    const linkValue = autolinker.link(value)
    // 멘션 문자를 a태그로 변환
    const result = linkValue
      .replace(USER_REGEX, (value) => `<a id=${AT_SIGN}>${value}</a>`)
      .replace(STOCK_REGEX, (value) => `<a id=${CASH_TAG}>${value}</a>`)

    return parse(result, options)
  }

  return { mentionToUrl }
}
