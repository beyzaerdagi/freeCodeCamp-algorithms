import { binarySearch } from "./method.js";


const testArray = [
    0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 49, 70
];


//should return [13, 5, 2, 0].
console.log(binarySearch(testArray, 0))

//should return [13, 5, 2, 0, 1].
console.log(binarySearch(testArray, 1))

//should return [13, 5, 2].
console.log(binarySearch(testArray, 2))

//should return the string Value Not Found.
console.log(binarySearch(testArray, 6))

//should return [13, 5, 10, 11].
console.log(binarySearch(testArray, 11))

//should return [13].
console.log(binarySearch(testArray, 13))

//should return [13, 19, 22, 49, 70].
console.log(binarySearch(testArray, 70))