function duplicateEncode(word){
  const letterCount = {};
  
  let result = '';
  
  const upperCaseWord = word.toUpperCase(word)
  
  for (const letter of upperCaseWord) {
    letterCount[letter] = (letterCount[letter]??0)+1
  }
  
  for (const letter of upperCaseWord) {
    if (letterCount[letter] === 1) {
      result += '('
      continue
    }
    
    result += ')'
  }
  return result
}

// Xx: with the help of a friend