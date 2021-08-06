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

  z-index: 999;
`

const Group = styled.div<{ shown: boolean }>`
  display: ${(props) => (props.shown ? 'block' : 'none')};
`

export function DropDown({
  children,
  shown,
  parentHeight,
  placement,
}: DropDownProps) {
  return (
    <>
      {shown && (
        <Wrapper
          shown={shown}
          parentHeight={parentHeight}
          placement={placement}
          onClick={(e) => e.stopPropagation()}
        >
          <Group shown={shown}>{children}</Group>
        </Wrapper>
      )}
    </>
  )
}

export default DropDown
