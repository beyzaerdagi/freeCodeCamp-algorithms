function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function partition(array, low, high){
  
  let pivot = array[high]
  let i = low - 1

  for(let j=low; j<=high-1; j++){
    if(array[j] < pivot){
      i++
      swap(i,j,array)
    }
  }
  swap(high,i+1,array)
  return i+1
}

export function quickSort(array, low = 0, high = array.length-1) {

  if(low < high){
    let pi = partition(array, low, high)

    quickSort(array, low, pi-1)
    quickSort(array, pi+1, high)
  }
  return array
}
