import React, { useMemo, useRef } from 'react'
import postSearchStock from '../../lib/api/stock/postSearchStock'
import getSearchUser from '../../lib/api/user/getSearchUser'
import { Block, CustomQuill } from '../../lib/styles/post'
import { useRootState } from '../common/hooks/useRootState'
import postSlice from '../../reducers/Slices/post'
import { useDispatch } from 'react-redux'
import UserIcon from '../../static/img/UserIcon.png'
import { debounceCallback } from '../../lib/utils'
import useGetTagHtml from './hooks/useGetTagHtml'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import optimizeImage from '../../lib/utils/optimizeImage'
import { place_holder_post } from '../../lib/variable'

type DataType = {
  id: number
  value: string
  avartar?: string
  subTitle?: string
  renderString?: string
}

export default function PostEditor() {
  const { body, isFocusInput } = useRootState((state) => state.post)
  const { setBody, setBodyLength, setIsFocusInput } = postSlice.actions
  const dispatch = useDispatch()
  const { getCacheTagHtml } = useGetTagHtml()
  const { ticker } = useParams<{ ticker: string }>()
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
              return `<div><img src=${optimizeImage(item.avartar, 120)} />${
                item.value
              }</div><div></div>`
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
    <Block isFocus={isFocusInput}>
      <CustomQuill
        modules={modules}
        onChange={(value, delta, source, editor) => {
          dispatch(setBody(value))
          dispatch(setBodyLength(editor.getText().length - 1))
        }}
        value={body}
        placeholder={place_holder_post}
        onFocus={(range, source, editor) => {
          dispatch(setIsFocusInput(true))
          if (ticker && (body === '' || body === '<p><br></p>')) {
            dispatch(setBody(getCacheTagHtml(ticker)))
            if (!inputRef.current?.editor) return
            setTimeout(
              () =>
                inputRef.current!.setEditorSelection(
                  inputRef.current!.editor!,
                  {
                    index: 2,
                    length: 0,
                  }
                ),
              1
            )
          }
        }}
        ref={inputRef}
      ></CustomQuill>
    </Block>
  )
}
