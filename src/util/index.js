export * from "./transformUtil";
export function runAsync(func) {
  setTimeout(func, 0);
}
