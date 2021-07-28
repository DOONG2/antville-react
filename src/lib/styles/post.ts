import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Mention, MentionsInput } from 'react-mentions'
import ReactQuill from 'react-quill'
import { grey010, grey020, grey030, grey050, grey060, grey080 } from './colors'
import { FontBlue } from './texts'
import 'quill-mention'
import 'quill-mention/dist/quill.mention.css'
import 'react-quill/dist/quill.snow.css'

export const Image = styled.img`
  height: 270px;
  margin: 15px auto;
  width: 100%;

  border: 1px solid ${grey030};
  border-radius: 8px;
`

export const Form = styled.form`
  position: relative;
`

export const FormInner = styled.div`
  display: flex;
  justify-content: space-between;

  column-gap: 1.4rem;

  margin-bottom: 13px;
`

export const InputWrapper = styled.div<{ isFocus: boolean }>`
  width: 56.1rem;

  padding: 12px 10px;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(p) => (p.isFocus ? 'column' : 'row')};
  min-height: ${(p) => (p.isFocus ? `114px` : '22px')};
`

export const PostInnerButtonsWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
`

export const PostItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;

  cursor: pointer;
`

export const SubmitButton = styled.button`
  width: 55px;
  height: 29px;

  border-radius: 3px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  margin-top: 9px;

  border: ${(props) =>
    props.disabled ? `1px solid ${grey030}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey030}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  color: ${grey010};
`

export const UserIconWrapper = styled.div`
  margin-top: 3px;
`

export const EmailCheck = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};
`

export const NewFontBlue = styled(FontBlue)`
  cursor: pointer;
`

export const LockedLabel = styled.div`
  align-self: center;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey050};
`

export const dynamicStyle = (props: {
  isfocus: boolean
  scrollheight: number
}) => css`
  min-height: ${props.isfocus ? `76px` : '22px'};
`

export const MentionInput = styled(MentionsInput)`
  align-self: center;
  width: 100%;
  font-size: 16px;
  line-height: 1.3;

  div.suggestions {
    margin-top: 16px;
  }

  ${dynamicStyle}
  padding: 0;

  textarea {
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    resize: none;

    color: #202020;
    background-color: #fff;

    &::placeholder {
      color: #aeaeae;
      font-size: 16px;
    }
  }
`
export const PostMention = styled(Mention)`
  font-size: 16px;

  background-color: #d6e6fd;
`

export const MentionItem = styled.div<{ focus: boolean }>`
  width: 264px;
  padding: 10px 12px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${grey080};
  background-color: ${(p) => (p.focus ? grey020 : '#fff')};

  border-bottom: 0.225872px solid #e0e0e0;
  border-right: 0.225872px solid #e0e0e0;
  border-left: 0.225872px solid #e0e0e0;
`

export const Margin = styled.div`
  margin-top: 12px;

  border-bottom: 0.225872px solid #e0e0e0;
`

export const SuggestionWrapper = styled.div``

export const MentionSubItem = styled.div`
  font-size: 11px;
  line-height: 13px;
  margin-top: 3px;

  color: ${grey060};
`

export const UserAvatar = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;

  margin-right: 14px;

  background-color: blue;
`

export const Block = styled.div`
  align-self: center;
  width: 100%;
  height: 100%;
`

export const CustomQuill = styled(ReactQuill)`
  height: 100%;
  .ql-container {
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    resize: none;

    color: #202020;
    background-color: #fff;
    border: none;
  }

  .ql-editor {
    padding: 0 15px;
  }
  .ql-blank {
    color: ${grey050};
  }

  span.mention {
    padding: 0 0;
  }

  .ql-mention-list-item {
    display: grid;
    padding: 9px 12px 7px 12px;
    grid-row-gap: 3px;
    border-bottom: 0.225872px solid #e0e0e0;

    span {
    }

    img {
      width: 25px;
      height: 25px;
      margin-right: 14px;
    }

    div:first-of-type {
      font-family: Roboto;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: ${grey080};
      display: flex;
      align-items: center;
    }
    div:last-child {
      font-family: Roboto;
      font-size: 11px;
      color: ${grey060};
      line-height: 13px;
    }
  }
`
