import styled from '@emotion/styled'
import { antblue050 } from '../../lib/styles/colors'
import {
  document_notice_url,
  document_privacy_url,
  document_rules_url,
} from '../../lib/variable'

function Footer() {
  return (
    <>
      <Wrapper>
        <CursorItem onClick={() => window.open(document_notice_url, '_black')}>
          공지사항
        </CursorItem>
        <CursorItem onClick={() => window.open(document_rules_url, '_black')}>
          이용 약관
        </CursorItem>
        <CursorItem onClick={() => window.open(document_privacy_url, '_black')}>
          개인정보 처리방침
        </CursorItem>
        <Item>© 2021 Vivaces, Inc.</Item>
      </Wrapper>
    </>
  )
}

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

const CursorItem = styled(Item)`
  cursor: pointer;
  :hover {
    color: ${antblue050};
  }
`

export default Footer
