//  ==========================================================================
//  Function imports
//  ==========================================================================
import { stringToNum } from './functions';

//  Convert 
export const calculateRem = (size: String): String => {
  const convertedSize = stringToNum(size);
  return `${convertedSize / 16}rem`;
}