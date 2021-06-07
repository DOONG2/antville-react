import styled from '@emotion/styled'
import { grey010, grey080 } from '../../mds/styled/colors'

interface Props {
  close: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Wrapper = styled.div`
  width: 118px;
  background-color: ${grey010};

  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Item = styled.div`
  width: 100%;
  border-bottom: 0.5px solid #e0e0e0;
  text-align: center;

  font-size: 13px;
  line-height: 18px;
  color: ${grey080};

  padding: 12px 0;
`

export default function FeedOptionDropDown({ close }: Props) {
  return (
    <>
      <Wrapper onClick={close}>
        <Group>
          <Item>게시글 신고</Item>
          <Item>계정 차단</Item>
        </Group>
      </Wrapper>
    </>
  )
}
