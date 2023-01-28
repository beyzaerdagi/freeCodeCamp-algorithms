function merger(arr1, arr2) {
    let i = 0,
        j = 0,
       mergedArr = []
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++])
      else mergedArr.push(arr1[i++])
    }
  
    while (i < arr1.length) {
      mergedArr.push(arr1[i++])
    }
  
    while (j < arr2.length) {
      mergedArr.push(arr2[j++])
    }
    return mergedArr
}
  
export function mergeSort(array) {
   
    if (array.length == 1) return array
  
    let middle = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))
  
    return merger(left, right)
}