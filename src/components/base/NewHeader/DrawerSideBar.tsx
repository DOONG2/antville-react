import styled from '@emotion/styled'
import SideBarTab from './SideBarTab'

export default function DrawerSideBar() {
  return (
    <Block>
      <SideBarTab />
    </Block>
  )
}

const Block = styled.div`
  padding-top: 7px;
`
