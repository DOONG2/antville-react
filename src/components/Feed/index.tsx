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

const PostInnerButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2px;
`

const PostItem = styled.div``

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

const FeedTapWraaper = styled.div`
  margin-top: 36px;
  padding: 15px 21px;
  display: flex;
  column-gap: 44px;

  border-bottom: 1px solid #ececec;
`

const TabItem = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  padding-bottom: 3px;

  color: #000000;

  border-bottom: 1px solid #1942e0;
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
                <PostInnerButtonsWrapper>
                  <PostItem>
                    <StockUpButton />
                  </PostItem>
                  <PostItem>
                    <StockDownButton />
                  </PostItem>
                  <PostItem>
                    <PictureUploadButton />
                  </PostItem>
                  <PostItem>
                    <GifUploadButton />
                  </PostItem>
                </PostInnerButtonsWrapper>
              </InputWrapper>

              <SubmitButton type="submit">게시</SubmitButton>
            </FormInner>
            <FeedTapWraaper>
              <TabItem>전체</TabItem>
              <TabItem>관심종목</TabItem>
              <TabItem>팔로잉</TabItem>
            </FeedTapWraaper>
          </Form>
        </FeedWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
