//
//  Build query string from complex structure
//
export const toQueryString = function(data: any){
  let finalString = "";

  if (data){
    finalString+="?";
    let keys = Object.keys(data);

    for(let key of keys){ 
        let customKey = key==="access" ? "modes" : key;

        if (data[key] instanceof Array){
            for (let value of data[key]){             

                finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                finalString += customKey+"[]="+value;
            }
        }

        // If nested 1 level
        else if(data[key] instanceof Object){
            let thisKeyObjs = Object.keys(data[key]);

            // Go for all keys
            for (let thisKey of thisKeyObjs){   
                let customKey = thisKey==="access" ? "modes" : thisKey;  

                // If is an array
                if (data[key][thisKey] instanceof Array){
                    // For each key, get value
                    for (let value of data[key][thisKey]){             

                        finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                        finalString += customKey+"[]="+value;
                    } 
                // If it is just a plain value
                }else if(data[key][thisKey]){
                    finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
                    finalString += customKey+"[]="+data[key][thisKey];
                }                       
            }
        }
        else if(data[key]){
            finalString = finalString.length>0 && keys.length>0 ? finalString+"&" : finalString;
            finalString += data[key] instanceof Array ? customKey+"[]="+data[key] : customKey+"="+data[key];
        }
    }
  }

  return finalString;
}