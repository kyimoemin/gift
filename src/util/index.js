export * from "./transformUtil";
export function runAsync(func) {
  setTimeout(func, 0);
}

export const getRandom = (start, end) =>
  Math.round(Math.random() * (end - start) + start);
