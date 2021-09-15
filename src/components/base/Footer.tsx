import styled from '@emotion/styled'
import { antblue050 } from '../../lib/styles/colors'
import media from '../../lib/styles/media'
import {
  document_notice_url,
  document_privacy_url,
  document_rules_url,
} from '../../lib/variable'

function Footer() {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <CursorItem
            onClick={() => window.open(document_notice_url, '_black')}
          >
            공지사항
          </CursorItem>
          <CursorItem onClick={() => window.open(document_rules_url, '_black')}>
            이용 약관
          </CursorItem>
          <CursorItem
            onClick={() => window.open(document_privacy_url, '_black')}
          >
            개인정보 처리방침
          </CursorItem>
          <Item>© 2021 Vivaces, Inc.</Item>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const InnerWrapper = styled.div`
  display: flex;
  max-width: 144rem;
  margin: 0 auto;
  padding: 2.1rem 0;
  justify-content: flex-start;
  ${media.medium} {
    justify-content: center;
    margin: 3rem 0;
    padding: 0;
  }
`

const Item = styled.div`
  font-weight: 500;
  font-size: 1.3rem;

  margin-left: 1.5rem;
  ${media.medium} {
    font-size: 1rem;
  }

  color: #202020;
`

const CursorItem = styled(Item)`
  cursor: pointer;
  :hover {
    color: ${antblue050};
  }
`

export default Footer
