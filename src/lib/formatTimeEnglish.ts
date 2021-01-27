export function formatTimeEnglish(times: number): string {
  if (times === 1) {
    return "once";
  } else {
    return "" + times + " times";
  }
}
