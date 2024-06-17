function digitize(n) {
  let invertedN = '';
  
  for (const number of n.toString()) {
      invertedN = number + invertedN;
  }
  
//   if (n === 0 ) {
//     return [0]
//   }
  
//   const result = [];
  
//   for (let i = n; i > 0; i = Math.trunc(i/10)) {
//     result.push(i%10)
//   }
  
//   return result
  
//   return n.toString().split("").reverse().map((n) => parseInt(n))
  
  const convert = (x) => {
    return parseInt(x)
  }
  
  return invertedN.toString().split("").map(convert)
}