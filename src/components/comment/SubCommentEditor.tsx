import React, { useMemo } from 'react'
import debounce from 'lodash.debounce'
import postSearchStock from '../../lib/api/stock/postSearchStock'
import getSearchUser from '../../lib/api/user/getSearchUser'
import UserIcon from '../../static/img/UserIcon.png'
import { Block, CustomQuill } from '../../lib/styles/post'

type DataType = {
  id: number
  value: string
  avartar?: string
  subTitle?: string
  renderString?: string
}

type Props = {
  body: string
  setBody(value: string): void
  setIsFocusInput(value: boolean): void
  setBodyLength(value: number): void
}

function debounceCallback(callback: (...arg: any) => any, duration: number) {
  return debounce(callback, duration)
}

export default function SubCommentEditor({
  body,
  setBody,
  setIsFocusInput,
  setBodyLength,
}: Props) {
  const postQueryStock = async (query: string) => {
    const result = await postSearchStock(query)
    return result.map((stock) => ({
      id: stock.id,
      value: stock.krName,
      subTitle: stock.symbol,
      renderString: stock.cashTagName,
    }))
  }

  const getQueryUser = async (query: string) => {
    const result = await getSearchUser(query)
    return result.map((user) => ({
      id: user.id,
      value: user.nickname,
      avartar: user.profileImg,
    }))
  }
  const modules = useMemo(() => {
    return {
      toolbar: false,
      mention: {
        minChars: 1,
        maxChars: 20,
        allowedChars: /^[a-zA-Z0-9_.ㄱ-ㅎㅏ-ㅜ가-힣]*$/,
        mentionDenotationChars: ['@', '$'],
        dataAttributes: ['id', 'value', 'renderString'],
        onSelect: (data: DataType, insertItem: any) => {
          if (data.renderString) {
            data.value = data.renderString
          }
          insertItem(data)
        },
        renderItem: (item: DataType, mentionChar: string) => {
          if (mentionChar === '@') {
            if (item.avartar) {
              return `<div><img src=${item.avartar} />${item.value}</div><div></div>`
            } else
              return `<div><img src=${UserIcon} />${item.value}</div><div></div>`
          } else {
            return `<div className="stock-title">${item.value}</div><div className="stock-sub-title">${item.subTitle}</div>`
          }
        },
        source: debounceCallback(
          async (searchTerm: string, renderItem: any, mentionChar: string) => {
            let values: DataType[]
            if (mentionChar === '@') {
              values = await getQueryUser(searchTerm)
            } else {
              values = await postQueryStock(searchTerm)
            }
            renderItem(values, mentionChar)
          },
          300
        ),
      },
    }
  }, [])

  return (
    <Block>
      <CustomQuill
        modules={modules}
        onChange={(value, delta, source, editor) => {
          setBody(value)
          setBodyLength(editor.getText().length)
        }}
        placeholder={'답글을 입력해주세요. '}
        onFocus={() => setIsFocusInput(true)}
        value={body}
      ></CustomQuill>
    </Block>
  )
}
