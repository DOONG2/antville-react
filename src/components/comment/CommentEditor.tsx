import React, { RefObject, useMemo } from 'react'
import debounce from 'lodash.debounce'
import postSearchStock from '../../lib/api/stock/postSearchStock'
import getSearchUser from '../../lib/api/user/getSearchUser'
import { useRootState } from '../common/hooks/useRootState'
import { useDispatch } from 'react-redux'
import UserIcon from '../../static/img/UserIcon.png'
import { Block, CustomQuill } from '../../lib/styles/post'
import commentSlice from '../../reducers/Slices/comment'
import optimizeImage from '../../lib/utils/optimizeImage'

type DataType = {
  id: number
  value: string
  avartar?: string
  subTitle?: string
  renderString?: string
}

type Props = {
  inputRef?: RefObject<any>
}

function debounceCallback(callback: (...arg: any) => any, duration: number) {
  return debounce(callback, duration)
}

export default function CommentEditor({ inputRef }: Props) {
  const { body, isFocusInput } = useRootState((state) => state.comment)
  const { setBody, setIsFocusInput, setBodyLength } = commentSlice.actions
  const dispatch = useDispatch()

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
        placeholder={'댓글을 입력해주세요. '}
        onFocus={() => dispatch(setIsFocusInput(true))}
        ref={inputRef}
      ></CustomQuill>
    </Block>
  )
}
