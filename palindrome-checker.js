
function palindrome(str) {
  
    var regex = /[\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let newstr = str.replace(regex,"").toLowerCase()
  
    let i = 0,j = newstr.length-1
    while(i<j && j>i){
      if(newstr[i] !== newstr[j]) return false
      i++
      j--
    }
    console.log(newstr) 
    return true;
}
  