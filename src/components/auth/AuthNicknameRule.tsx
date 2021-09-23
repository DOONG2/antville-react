import styled from '@emotion/styled/macro'
import WarningIcon from '../../static/svg/WarningIcon'
import QuestionIcon from '../../static/svg/QuestionIcon'
import { grey070 } from '../../lib/styles/colors'

function AuthNicknameRule() {
  return (
    <>
      <NewQuestionIcon />
      <HiddenAnswerForm>
        <Group>
          <Row>
            <NewNoticeGridIcons />
            영어 3-29자, 한글 14자 이내
          </Row>
          <Row>
            <NewNoticeGridIcons />
            특수문자는 마침표와 밑줄만 사용가능
          </Row>
          <Row>
            <NewNoticeGridIcons />
            마침표 2개 이상 사용 불가
          </Row>
          <Row>
            <NewNoticeGridIcons />
            닉네임 시작과 끝에는 마침표 사용 불가
          </Row>
          <Row>
            <NewNoticeGridIcons />
            한글 사용시 자음/모음 단독 사용 불가
          </Row>
        </Group>
      </HiddenAnswerForm>
    </>
  )
}

const HiddenAnswerForm = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate3d(0, 100%, 0);

  padding: 13px;

  font-size: 10px;
  line-height: 13px;
  color: #ffffff;
  background: ${grey070};
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  z-index: 2;
`

const Group = styled.div`
  display: grid;
  row-gap: 9px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const NewNoticeGridIcons = styled(WarningIcon)`
  margin-right: 7px;
`

const NewQuestionIcon = styled(QuestionIcon)`
  margin-right: 10px;

  &:hover + ${HiddenAnswerForm} {
    visibility: visible;
  }
`

export default AuthNicknameRule
