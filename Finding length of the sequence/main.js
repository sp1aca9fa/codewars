var lengthOfSequence = function (arr, n) {
  if (arr.length === 1) {
    return 0
  }
  
  let arrayFind = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      arrayFind.push(i)
    }
  }
  
  if (arrayFind.length >= 3) {
    return 0
  }
  
//   console.log(arrayFind)
//   console.log(arrayFind[1]-arrayFind[0])
  
  return arrayFind[1]-arrayFind[0]+1
  
};
