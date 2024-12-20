import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ReactQuill from 'react-quill'
import {
  grey010,
  grey020,
  grey030,
  grey050,
  grey060,
  grey080,
  red050,
  sky020,
  sky040,
} from 'src/styles/colors'

import 'quill-mention'
import 'quill-mention/dist/quill.mention.css'
import 'react-quill/dist/quill.snow.css'

export const LoginBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999999;
  cursor: pointer;
`

export const AvatarImage = styled.img`
  object-fit: cover;
`

export const Image = styled.img`
  height: 270px;
  margin: 0 auto;
  margin-top: 18px;
  width: 100%;
  cursor: pointer;

  border: 1px solid ${grey030};
  border-radius: 8px;
  object-fit: cover;
`

export const Form = styled.form`
  position: relative;
  padding: 17px 20px 17px 30px;

  border-bottom: 1px solid ${grey030};
  width: 80%;
`
export const StyledCommentForm = styled(Form)`
  position: relative;
  padding: 17px 20px 17px 30px;
  border-bottom: 1px solid ${grey030};
`

export const FormInner = styled.div`
  display: flex;
  column-gap: 19px;
`

export const InputWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: 'row';
  min-height: 22px;
`

export const PostInnerButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
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

  border: ${(props) =>
    props.disabled ? `1px solid ${grey030}` : '1px solid #1942e0'};
  background: ${(props) => (props.disabled ? `${grey030}` : '#1942e0')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  color: ${grey010};
`

export const UserIconWrapper = styled.div`
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 0.5px solid ${grey020};
  }
`

export const PostInner = styled.div`
  display: flex;
  column-gap: 20px;
  bottom: 1rem;
  right: 1rem;
`

export const EmailCheck = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: ${grey080};
`

export const dynamicStyle = (props: {
  isfocus: boolean
  scrollheight: number
}) => css`
  min-height: ${props.isfocus ? `76px` : '22px'};
`

export const MentionItem = styled.div<{ focus: boolean }>`
  width: 264px;
  padding: 10px 12px;

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

export const Block = styled.div<{ isFocus: boolean }>`
  align-self: center;
  width: 100%;
  padding-right: 15px;
  height: ${(p) => (p.isFocus ? '100%' : 'auto')};
`

export const CustomQuill = styled(ReactQuill)`
  height: 100%;

  .ql-container {
    white-space: nowrap;
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
    padding: 0 0;
  }
  .ql-blank {
    color: ${grey050};
    ::before {
      width: 100%;
      left: 0;
    }
  }

  span.mention {
    padding: 0 0;
    background-color: #fff;
    color: ${sky040};
  }

  .ql-mention-list-item.selected {
    background-color: ${sky020};
  }

  .ql-mention-list-item {
    display: grid;
    padding: 9px 12px 7px 12px;
    grid-row-gap: 3px;
    border-bottom: 0.225872px solid #e0e0e0;

    img {
      width: 25px;
      height: 25px;
      margin-right: 14px;
      object-fit: cover;
      border-radius: 25px;
      border: 0.5px solid ${grey020};
    }

    div:first-of-type {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: ${grey080};
      display: flex;
      align-items: center;
    }
    div:last-child {
      font-size: 11px;
      color: ${grey060};
      line-height: 13px;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BodyLengthView = styled.div<{ isLimited: boolean }>`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: right;

  color: ${(p) => (p.isLimited ? red050 : grey050)};
`
