export function randomColor(s: string) {
  return '#' + s.charCodeAt(0) * 1234567 % 777215;
}
