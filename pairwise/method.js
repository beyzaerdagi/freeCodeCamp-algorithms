export function pairwise(arr, arg) {
    let sumIndices = 0
    let pairs = []
    for(let i=0;i<arr.length;i++){
      let indices = 0
      for(let j=i+1;j<arr.length;j++){
        let tmp = arr[i] + arr[j]
        if(tmp == arg && !pairs.includes(i) 
          && !pairs.includes(j)){
          pairs.push(i,j)
          indices = i + j
          break
        }
      }
      sumIndices += indices
    }
    return sumIndices;
}
  
  
  