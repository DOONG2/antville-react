import styled from '@emotion/styled'

interface DropDownProps {
  children: React.ReactNode
  shown: boolean
  parentHeight: number
  placement: string
}

const Wrapper = styled.div<{
  shown: boolean
  parentHeight: number
  placement: string
}>`
  position: absolute;
  right: ${(p) => (p.placement === 'Right' ? 0 : '')};
  left: ${(p) => (p.placement === 'Left' ? 0 : '')};
  top: ${(p) => `${p.parentHeight + 10}px`};
  display: ${(props) => (props.shown ? 'block' : 'none')};

  background: #fafafa;
  box-shadow: 0px 4px 14px rgba(32, 32, 32, 0.12),
    0px 1.6711px 5.84887px rgba(32, 32, 32, 0.0862625),
    0px 0.893452px 3.12708px rgba(32, 32, 32, 0.0715329),
    0px 0.500862px 1.75302px rgba(32, 32, 32, 0.06),
    0px 0.266004px 0.931014px rgba(32, 32, 32, 0.0484671),
    0px 0.11069px 0.387416px rgba(32, 32, 32, 0.0337375);

  z-index: 2;
`

const Group = styled.div<{ shown: boolean }>`
  display: ${(props) => (props.shown ? 'block' : 'none')};
`

const DropDown = ({
  children,
  shown,

  parentHeight,
  placement,
}: DropDownProps) => {
  return (
    <Wrapper
      shown={shown}
      parentHeight={parentHeight}
      placement={placement}
      onClick={(e) => e.stopPropagation()}
    >
      <Group shown={shown}>{children}</Group>
    </Wrapper>
  )
}

export default DropDown
