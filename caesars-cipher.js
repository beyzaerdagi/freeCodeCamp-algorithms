function rot13(str) {

    let newStr = ""
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i=0;i<str.length;i++){
      if(str[i] !== " ") {
        if(str[i] !== "?" && str[i] !== "!" && str[i] !== "."){
          let tmp = alphabet.indexOf(str[i])
          if(tmp + 13 >= alphabet.length) {
              newStr += alphabet[13 - (alphabet.length-tmp)]
          }else{
            newStr += alphabet[tmp+13]
          }
        }else{
          newStr += str[i]
        }
      }else{
        newStr += " "
      }
    }
    return newStr;
}
  