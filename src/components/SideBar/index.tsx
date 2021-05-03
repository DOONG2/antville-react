import styled from '@emotion/styled'
import { grey040 } from '../../mds/theme/colors'

const Wrapper = styled.div`
  position: absolute;
  left: 2.4rem;
`

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const Title = styled.div`
  display: flex;
  width: 29.7rem;
  padding: 1rem 1.2rem;
  height: 4.1rem;

  font-weight: 700;
  font-size: 13px;
  line-height: 18px;

  color: #202020;

  border-bottom: 0.5px solid #1942e0;
`

const Main = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainLabel = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 150%;

  text-align: center;

  color: #202020;
`

const Footer = styled.div`
  margin-top: 2rem;
`

const Group = styled.div`
  display: flex;
  column-gap: 1rem;
`

const Item = styled.div`
  color: ${grey040};

  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.8rem;
`

function SideBar() {
  return (
    <>
      <Wrapper>
        <Card>
          <Title>관심 종목</Title>
          <Main>
            <MainLabel>
              원하는 종목을 검색하고
              <br />
              관심 종목 리스트에 등록해보세요!
            </MainLabel>
          </Main>
        </Card>
        <Footer>
          <Group>
            <Item>약관</Item>
            <Item>개인정보 처리 방침</Item>
            <Item>© 2021 Antville, Inc.</Item>
          </Group>
        </Footer>
      </Wrapper>
    </>
  )
}

export default SideBar
