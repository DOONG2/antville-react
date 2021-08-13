import Polygon from '../../static/svg/Polygon'
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
    if (isSmall) return <></>
    return <Polygon />
  } else if (sign === '+') {
    if (isSmall) return <PolygonUpSmall />
    return <PolygonUp />
  } else {
    if (isSmall) return <PolygonDownSmall />
    return <PolygonDown />
  }
}
