import ImageOptimizer from 'src/utils/ImageOptimizer'
import UserIcon from 'src/images/UserIcon.png'
import debounce from 'lodash.debounce'
import { useMemo } from 'react'
import { MENTION_ALLOWED_CHAR } from 'src/constants/post'
import useSearchData from './useSearchData'

type DataType = {
  id: number
  value: string
  avartar?: string
  subTitle?: string
  renderString?: string
}

export default function useReactQuill() {
  const { getQueryUser, postQueryStock } = useSearchData()

  const getAvartarUserItem = (value: string, avartar: string) =>
    `<div><img src=${ImageOptimizer(avartar, 120)} />${value}</div><div></div>`

  const getNormalUserItem = (value: string) =>
    `<div><img src=${UserIcon} />${value}</div><div></div>`

  const getStockItem = (value: string, subTitle?: string) =>
    `<div>${value}</div><div>${subTitle ? subTitle : ''}</div>`

  const pushMatchers = (node: any, delta: any) => {
    let ops: any = []
    delta.ops.forEach(({ insert }: any) => {
      insert &&
        (typeof insert === 'string' || insert['mention']) &&
        ops.push({
          insert,
        })
    })
    delta.ops = ops
    return delta
  }

  const renderItem = (
    { avartar, value, subTitle }: DataType,
    mentionChar: string
  ) =>
    mentionChar === '@'
      ? avartar
        ? getAvartarUserItem(value, avartar)
        : getNormalUserItem(value)
      : getStockItem(value, subTitle)

  const getSource = async (
    searchTerm: string,
    renderItem: any,
    mentionChar: string
  ) => {
    let values: DataType[]
    if (mentionChar === '@') values = await getQueryUser(searchTerm)
    else values = await postQueryStock(searchTerm)
    renderItem(values, mentionChar)
  }

  const onSelect = (data: DataType, insertItem: any) => {
    if (data.renderString) insertItem({ ...data, value: data.renderString })
    else insertItem(data)
  }

  const modules = useMemo(() => {
    return {
      toolbar: false,
      clipboard: {
        matchers: [[Node.ELEMENT_NODE, pushMatchers]],
      },
      mention: {
        minChars: 1,
        maxChars: 20,
        allowedChars: MENTION_ALLOWED_CHAR,
        mentionDenotationChars: ['@', '$'],
        dataAttributes: ['id', 'value', 'renderString'],
        onSelect,
        renderItem,
        source: debounce(getSource, 300),
      },
    }
  }, [])
  return { modules }
}
