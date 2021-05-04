import styled from '@emotion/styled'
import React from 'react'
import GifUploadButton from '../../assets/svg/GifUploadButton'
import PictureUploadButton from '../../assets/svg/PictureUploadButton'
import StockDownButton from '../../assets/svg/StockDownButton'
import StockUpButton from '../../assets/svg/StockUpButton'
import UserIcon from '../../assets/svg/UserIcon'
import usePostFormik from '../../hooks/usePostFormik'
import { grey010, grey020 } from '../../mds/theme/colors'
import SideBar from '../SideBar'

const Wrapper = styled.div`
  min-width: 144rem;
`

const Form = styled.form`
  position: relative;
`

const BarWrapper = styled.div`
  width: 144rem;
  padding: 3rem 0;
  margin: 0 auto;
  position: relative;
`

const FeedWrapper = styled.div`
  width: 68.4rem;
  margin: 0 auto;
  position: relative;
`

const FormInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.4rem;
`

const InputWrapper = styled.div`
  width: 56.1rem;
  height: 46px;
  padding: 12px 10px;

  background: #ffffff;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
`

const PostInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.2rem;
  outline: none;
  border: none;

  color: #202020;
  background-color: #fff;

  &::placeholder {
    color: #aeaeae;
  }
`

const UploadButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
`

const Item = styled.div``

const SubmitButton = styled.button`
  width: 55px;
  height: 29px;

  background-color: #e0e0e0;
  border-radius: 3px;
  border: none;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  color: ${grey010};
`

const Feed = () => {
  const {
    dirty,
    isValid,
    values,
    errors,
    touched,
    isValidating,
    submitCount,
    handleSubmit,
    resetForm,
    getFieldProps,
  } = usePostFormik()
  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />

        <FeedWrapper>
          <Form onSubmit={handleSubmit}>
            <FormInner>
              <UserIcon />
              <InputWrapper>
                <PostInput
                  id="body"
                  type="text"
                  {...getFieldProps('body')}
                  placeholder={
                    '당신의 생각을 공유해주세요! ($ 태그 사용 후, 종목  입력) '
                  }
                />
                <UploadButtonsWrapper>
                  <Item>
                    <StockUpButton />
                  </Item>
                  <Item>
                    <StockDownButton />
                  </Item>
                  <Item>
                    <PictureUploadButton />
                  </Item>
                  <Item>
                    <GifUploadButton />
                  </Item>
                </UploadButtonsWrapper>
              </InputWrapper>

              <SubmitButton type="submit">게시</SubmitButton>
            </FormInner>
          </Form>
        </FeedWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
