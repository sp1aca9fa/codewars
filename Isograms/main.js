function isIsogram(str){
  const letterCount = {};
  const upperCaseWord = str.toUpperCase()
  
  for (const letter of upperCaseWord) {
    letterCount[letter] = (letterCount[letter]??0)+1
    // {D: 1, E: 1, R: 1, ...}

    if (letterCount[letter] > 1) {
      return false
    } 
  }
  
  return true
}