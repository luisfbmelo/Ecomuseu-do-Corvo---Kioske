//  Remove px, pt, em, rem from string
export const stringToNum  = (str: String): number => {
  const splittedStr = str.split(/px|pt|em|rem/gi)[0];
  return parseInt(splittedStr);
}

// Convert HEX to RGBA
export const hexToRgbA = (hex: string, opacity: number = 1) =>{
  var c: any;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length=== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
  }
  throw new Error('Bad Hex');
}