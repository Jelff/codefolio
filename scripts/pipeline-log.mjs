const colors = {
  yellow: 33,
  blue: 34,
  gray: 90,
  green: 32,
  red: 31,
  magenta: 35,
};
export function paint(message, color = "blue") {
  const enabled =
    !process.env.NO_COLOR &&
    (process.stdout.isTTY ||
      process.env.FORCE_COLOR ||
      process.env.GITHUB_ACTIONS);
  return enabled ? `\u001b[${colors[color]}m${message}\u001b[0m` : message;
}

export function log(message, color = "blue") {
  console.log(paint(message, color));
}
