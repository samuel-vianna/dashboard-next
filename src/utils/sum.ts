export default function sum(arr: (number | null)[]) {
  return arr.reduce((acc, cur) => (acc ?? 0) + (cur ?? 0), 0);
}
