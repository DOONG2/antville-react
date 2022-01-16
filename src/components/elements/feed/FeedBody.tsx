import styled from '@emotion/styled'
import { useRootState } from 'src/components/common/hooks/useRootState'
import useMentionToUrl from './hooks/useMentionToUrl'

export default function FeedBody() {
  const { body } = useRootState((state) => state.Feed)

  // body의 멘션데이터 파싱
  const { mentionToUrl } = useMentionToUrl()

  return (
    <Wrapper>
      {body.split('\n').map((line, index) => (
        <div key={`${index}-feed-body-all`}>
          {mentionToUrl(line)}
          <br />
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  word-break: break-all;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 1.6rem;
  line-height: 2rem;
  padding: 2rem;
`
