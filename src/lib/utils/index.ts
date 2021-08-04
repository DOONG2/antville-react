import debounce from 'lodash.debounce'

export function debounceCallback(
  callback: (...arg: any) => any,
  duration: number
) {
  return debounce(callback, duration)
}
