import styled from '@emotion/styled'
import { useState } from 'react'
import { grey050 } from '../../mds/styled/colors'

interface Props {
  body: string
  isDetail?: boolean
}

const Wrapper = styled.div`
  word-break: break-all;
`

const ExtendButton = styled.div`
  margin-top: 15px;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;

  color: ${grey050};
`

export default function FeedBody({ body, isDetail }: Props) {
  const [isExtended, setIsExtended] = useState<boolean>(body.length > 300)
  return (
    <Wrapper>
      {isExtended && !isDetail ? (
        <>
          {body
            .slice(0, 300)
            .split('\n')
            .map((line) => (
              <>
                <span>
                  {line}
                  <br />
                </span>
              </>
            ))}
          {'...'}
          <ExtendButton onClick={() => setIsExtended(false)}>
            더보기
          </ExtendButton>
        </>
      ) : (
        body.split('\n').map((line) => (
          <>
            <span>
              {line}
              <br />
            </span>
          </>
        ))
      )}
    </Wrapper>
  )
}
