import MemoPolygon from '../../static/svg/Polygon'
import MemoPolygonDown from '../../static/svg/PolygonDown'
import MemoPolygonUp from '../../static/svg/PolygonUp'

type Props = {
  width: number
  height: number
  sign: string
}
export function SignIcon({ width, height, sign }: Props) {
  if (sign === '') {
    return <MemoPolygon width={width} height={height} />
  } else if (sign === '+') {
    return <MemoPolygonUp width={width} height={height} />
  } else {
    return <MemoPolygonDown width={width} height={height} />
  }
}
