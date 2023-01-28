function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

export function selectionSort(array) {

  for(let i=0; i<array.length-1; i++){
    let minIdx = i
    for(let j=i+1; j<array.length; j++){
      if(array[j] < array[minIdx]){
        minIdx = j
      }
    }
    swap(i, minIdx, array)
  }
  return array;
}