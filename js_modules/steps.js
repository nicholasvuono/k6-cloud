export default function step(func) {
  const start = new Date().getTime();
  func();
  const end = new Date().getTime();
  return end - start;
}
