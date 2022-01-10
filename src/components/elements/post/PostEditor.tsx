import { useRef, useState } from 'react'

import ReactQuill from 'react-quill'
import { INPUT_PLACEHOLDER } from 'src/constants/post'

import * as Styled from './Styled'
import { useDispatch } from 'react-redux'
import { useRootState } from 'src/components/common/hooks/useRootState'
import { setPostBody } from 'src/features/Post/PostSlice'
import useReactQuill from './hooks/useReactQuill'

export default function PostEditor() {
  const { body } = useRootState((state) => state.Post)
  const [isFocusInput, setIsFocusInput] = useState(false)

  const { modules } = useReactQuill()

  const dispatch = useDispatch()

  const inputRef = useRef<ReactQuill>(null)

  return (
    <Styled.Block isFocus={isFocusInput}>
      <Styled.CustomQuill
        formats={['mention']}
        modules={modules}
        onChange={(value) => dispatch(setPostBody(value))}
        value={body}
        placeholder={INPUT_PLACEHOLDER}
        onFocus={() => setIsFocusInput(true)}
        ref={inputRef}
      ></Styled.CustomQuill>
    </Styled.Block>
  )
}
