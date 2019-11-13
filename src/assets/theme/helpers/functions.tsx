//  Remove px, pt, em, rem from string
export const stringToNum  = (str: String): number => {
  const splittedStr = str.split(/px|pt|em|rem/gi)[0];
  return parseInt(splittedStr);
}