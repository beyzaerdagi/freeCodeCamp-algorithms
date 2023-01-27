export function sym(...args) {
  for(let i=1;i<args.length;i++){
    args[0] = makeSymArr(args[0],args[i])
  }

  for(let i=0;i<args[0].length;i++){
    for(let j=i+1;j<args[0].length;j++){
      let tmp = args[0][i]
      if(args[0][i] == args[0][j]){
        args[0] = arrayRemove(args[0],args[0][i])
        args[0].push(tmp)
      }
    }
  }
  return args[0];
}
  
function makeSymArr(...args){
  let idx = 1
  if(args[0].length > args[1].length){
    idx = 0
  }

  if(idx == 1){
    var tmpArr = Array.from(args[0])
    for(let i=0;i<args[idx].length;i++){
      if(!args[0].includes(args[idx][i])){
        tmpArr.push(args[idx][i])
      }else{
        tmpArr = arrayRemove(tmpArr, args[idx][i])
      }
    }
  }else{
    var tmpArr = Array.from(args[1])
    for(let i=0;i<args[idx].length;i++){
      if(!args[1].includes(args[idx][i])){
        tmpArr.push(args[idx][i])
      }else{
        tmpArr = arrayRemove(tmpArr, args[idx][i])
      }
    }
  }

  return tmpArr
}
  
function arrayRemove(arr, value) { 
      
  return arr.filter(function(ele){ 
    return ele != value; 
  });
}
  
