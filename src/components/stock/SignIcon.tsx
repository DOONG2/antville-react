import styled from '@emotion/styled'
import PolygonDown from '../../static/svg/PolygonDown'
import PolygonDownSmall from '../../static/svg/PolygonDownSmall'
import PolygonUp from '../../static/svg/PolygonUp'
import PolygonUpSmall from '../../static/svg/PolygonUpSmall'

type Props = {
  sign: string
  isSmall?: boolean
}
export function SignIcon({ sign, isSmall }: Props) {
  if (sign === '') {
    if (isSmall) return <PolygonSmall />
    return <Polygon />
  } else if (sign === '+') {
    if (isSmall) return <PolygonUpSmall />
    return <PolygonUp />
  } else {
    if (isSmall) return <PolygonDownSmall />
    return <PolygonDown />
  }
}

const Polygon = styled.div`
  height: 2px;
  width: 5.3px;
  background-color: #202020;
`

const PolygonSmall = styled(Polygon)`
  height: 1px;
`
