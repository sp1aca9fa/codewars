function toCamelCase(str){
  let resultString = '';
  
//   let shouldTransformToUpperCase = false;
  
//   for (const char of str) {
//     if (char !== '-' && char !== '_') {
//       if (shouldTransformToUpperCase) {
//         resultString += char.toUpperCase();
//         shouldTransformToUpperCase = false;
//       } else {
//         resultString += char;
//       }
//     } else {
//       shouldTransformToUpperCase = true
//     }
//   }
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const previousChar = str[i-1] 
    
    if (char !== '-' && char !== '_') {
      if (previousChar === '-' || previousChar === '_') {
        resultString += char.toUpperCase()
      } else {
        resultString += char;
      }
    }
  }
  
  
  return resultString;
//   return str.replace(/[-_][A-Za-z]/g, results => {
//     console.log(results);
//       return results[1].toUpperCase();
//   });
}