import styled from '@emotion/styled'
import { antblue050, grey030, grey080 } from '../../mds/styled/colors'

const Wrapper = styled.div`
  display: flex;
  margin-top: 25px;
`

const Group = styled.div<{ isClicked: boolean }>`
  width: 100%;
  border-bottom: ${(p) =>
    p.isClicked ? `2px solid ${antblue050}` : `1px solid ${grey030}`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: ${grey080};
  cursor: pointer;
`
const Count = styled.div``

const Title = styled.div`
  font-weight: 400;
  padding-top: 1px;
  padding-bottom: 11px;
`

export default function ProfileTab() {
  return (
    <Wrapper>
      <Group isClicked={true}>
        <Count>91</Count>
        <Title>활동내역</Title>
      </Group>
      <Group isClicked={false}>
        <Count>289</Count>
        <Title>좋아하는 게시물</Title>
      </Group>
    </Wrapper>
  )
}
