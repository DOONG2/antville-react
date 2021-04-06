import styled from '@emotion/styled'

const SidebarStyle = styled.aside`
  width: 16.25rem;
  height: 100%;
  position: fixed;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
`

const MainStyle = styled.main`
  padding-left: 2rem;
  margin-left: 16.25rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export type AppLayoutProps = {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>
}

export type SideProps = {
  children: React.ReactNode
}

function Side({ children }: SideProps) {
  const test = 0
  return <SidebarStyle>{children}</SidebarStyle>
}

export type MainProps = {
  children: React.ReactNode
}

function Main({ children }: MainProps) {
  return <MainStyle>{children}</MainStyle>
}

AppLayout.Side = Side
AppLayout.Main = Main
