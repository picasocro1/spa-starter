export const classNames = (...classNames: (string | boolean | undefined)[]): string =>
  classNames.filter(Boolean).join(' ')
