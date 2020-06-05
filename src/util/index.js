export * from "./transformUtil";
export function runAsync(func) {
  setTimeout(func, 0);
}

export const getRandom = (start, end, gap = 1) => {
  const r = Math.random();
  const multiplier = (end - start) / gap;
  return Math.floor(r * multiplier + start) * gap;
};
