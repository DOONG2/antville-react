import styled from '@emotion/styled'
import PostForm from '../Form/PostForm'
import SideBar from '../SideBar'

const Wrapper = styled.div`
  min-width: 144rem;
`

const BarWrapper = styled.div`
  width: 144rem;
  padding: 3rem 0;
  margin: 0 auto;
  position: relative;
`

const PostWrapper = styled.div`
  width: 68.4rem;
  margin: 0 auto;
  position: relative;
`

const Feed = () => {
  return (
    <Wrapper>
      <BarWrapper>
        <SideBar />
        <PostWrapper>
          <PostForm />
        </PostWrapper>
      </BarWrapper>
    </Wrapper>
  )
}

export default Feed
