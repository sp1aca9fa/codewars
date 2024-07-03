function addBinary(a,b) {
  const sum = a + b;
  
  let remainders = '';
  
  for (let i = sum; Math.floor(i)/2 > 0; i = Math.floor(i/2)) {
    
    if (i === 1) {
      remainders = 1 + remainders
      continue
    }
    
    remainders = i%2 + remainders
  }
  
//   console.log(remainders)
  
  return remainders

//return (a+b).toString(2)
}
