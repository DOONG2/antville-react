import styled from '@emotion/styled/macro'
import NoticeGridIcons from '../../assets/svg/NoticeGridIcons'
import QuestionIcon from '../../assets/svg/QuestionIcon'
import { grey010, grey060 } from '../../mds/theme/colors'

const HiddenAnswerForm = styled.div`
  visibility: hidden;
  position: absolute;
  right: 0;
  top: 30px;
  padding: 13px;

  font-family: Roboto;
  font-size: 13px;
  line-height: 15px;
  color: ${grey060};
  background-color: ${grey010};
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  z-index: 2;
`

const Group = styled.div`
  display: grid;
  row-gap: 0.9rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const NewNoticeGridIcons = styled(NoticeGridIcons)`
  margin-right: 7px;
`

const NewQuestionIcon = styled(QuestionIcon)`
  margin-right: 10px;
  cursor: pointer;

  &:hover + ${HiddenAnswerForm} {
    visibility: visible;
  }
`

const NickNameRuleLabel = () => {
  return (
    <>
      <NewQuestionIcon />
      <HiddenAnswerForm>
        <Group>
          <Row>
            <NewNoticeGridIcons />
            영어 3-29자, 한글 2014자 이내
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

export default NickNameRuleLabel
