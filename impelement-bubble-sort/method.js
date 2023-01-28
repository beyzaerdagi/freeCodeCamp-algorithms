function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

export function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      let isSwap = false
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1, array);
          isSwap = true
        }
      }
      if(!isSwap){
        break
      } 
    }
    return array;
}