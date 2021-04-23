import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  width: 144rem;
  padding: 2.5rem;
  margin: 0 auto;
`

const Item = styled.div`
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8rem;
  margin-left: 2rem;

  color: #202020;
`

function Footer() {
  return (
    <>
      <Wrapper>
        <Item>고객센터</Item>
        <Item>이용 약관</Item>
        <Item>개인정보 처리방침</Item>
        <Item>© 2021 Antville, Inc.</Item>
      </Wrapper>
    </>
  )
}

export default Footer
