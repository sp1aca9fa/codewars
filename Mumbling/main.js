function accum(s) {
  let result = '';
  
	for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase()
    
//     result += s[i].toUpperCase()+s[i].toLowerCase().repeat(i)
    
    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase()
    }
 
    if (i !== s.length-1) {
      result += '-'
    }
    
  }
  
  return result
}