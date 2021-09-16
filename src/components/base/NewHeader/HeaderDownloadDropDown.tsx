import styled from '@emotion/styled'
import QRCode from '../../../static/svg/QRCode'

export default function HeaderDownloadDropDown() {
  return (
    <Block>
      <Title>
        아래 <Bold>QR 코드</Bold>를 스캔하면,
        <br /> 앱 다운로드 페이지로 이동합니다.
      </Title>
      <QRCodeWrapper>
        <QRCode />
      </QRCodeWrapper>
    </Block>
  )
}

const Bold = styled.div`
  display: inline;
  font-weight: 700;
`

const Block = styled.div`
  cursor: default;
  padding: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 12px;
  width: 232px;
  height: 273px;

  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);
`

const Title = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
  color: #202020;
  text-align: center;
`

const QRCodeWrapper = styled.div``
