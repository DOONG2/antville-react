import React, { useMemo, useRef, useState } from 'react'

import UserIcon from 'src/images/UserIcon.png'
import ReactQuill from 'react-quill'
import ImageOptimizer from 'src/utils/ImageOptimizer'
import { INPUT_PLACEHOLDER } from 'src/constants/post'
import postSearchStock from 'src/api/stock/postSearchStock'
import getSearchUser from 'src/api/user/getSearchUser'

import debounce from 'lodash.debounce'
import * as Styled from './Styled'
import { useDispatch } from 'react-redux'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { setPostBody } from 'src/features/Post/PostSlice'

type DataType = {
  id: number
  value: string
  avartar?: string
  subTitle?: string
  renderString?: string
}

export default function PostEditor() {
  const [isFocusInput, setIsFocusInput] = useState(false)
  const { body } = useRootState((state) => state.Post)

  const dispatch = useDispatch()

  const inputRef = useRef<ReactQuill>(null)

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
      clipboard: {
        matchers: [
          [
            Node.ELEMENT_NODE,
            function (node: any, delta: any) {
              let ops: any = []
              delta.ops.forEach((op: any) => {
                if (
                  op.insert &&
                  (typeof op.insert === 'string' || op.insert['mention'])
                ) {
                  ops.push({
                    insert: op.insert,
                  })
                }
              })
              delta.ops = ops
              return delta
            },
          ],
        ],
      },
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
              return `<div><img src=${ImageOptimizer(item.avartar, 120)} />${
                item.value
              }</div><div></div>`
            } else
              return `<div><img src=${UserIcon} />${item.value}</div><div></div>`
          } else {
            return `<div className="stock-title">${item.value}</div><div className="stock-sub-title">${item.subTitle}</div>`
          }
        },
        source: debounce(
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
    <Styled.Block isFocus={isFocusInput}>
      <Styled.CustomQuill
        formats={['mention']}
        modules={modules}
        onChange={(value, delta, source, editor) => {
          dispatch(setPostBody(value))
        }}
        value={body}
        placeholder={INPUT_PLACEHOLDER}
        onFocus={(range, source, editor) => {
          setIsFocusInput(true)
        }}
        ref={inputRef}
      ></Styled.CustomQuill>
    </Styled.Block>
  )
}
