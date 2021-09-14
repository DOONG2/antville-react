import styled from '@emotion/styled'
import PolygonDown from '../../static/svg/PolygonDown'
import PolygonDownChart from '../../static/svg/PolygonDownChart'
import PolygonDownSmall from '../../static/svg/PolygonDownSmall'
import PolygonUp from '../../static/svg/PolygonUp'
import PolygonUpChart from '../../static/svg/PolygonUpChart'
import PolygonUpSmall from '../../static/svg/PolygonUpSmall'

type Props = {
  sign: string
  isSmall?: boolean
  isChart?: boolean
}
export function SignIcon({ sign, isSmall, isChart }: Props) {
  if (sign === '') {
    if (isSmall) return <PolygonSmall />
    return <Polygon />
  } else if (sign === '+') {
    if (isChart) return <PolygonUpChart />
    if (isSmall) return <PolygonUpSmall />
    return <PolygonUp />
  } else {
    if (isChart) return <PolygonDownChart />
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
