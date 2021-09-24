import HeaderNoticeDropDown from '../../components/base/HeaderNoticeDropDown'
import { useRootState } from '../../components/common/hooks/useRootState'
import MainTemplate from '../../components/main/MainTemPlate'
import { Wrapper } from '../../lib/styles/feed'

export default function NoticePage() {
  const user = useRootState((state) => state.user)
  if (!user) return <></>

  return (
    <MainTemplate
      children={
        <>
          <Wrapper>
            <HeaderNoticeDropDown id={user.id} isNotDropDown={true} />
          </Wrapper>
        </>
      }
    />
  )
}
