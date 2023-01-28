import { pairwise } from "./method.js";


//should return 11.
console.log(pairwise([1, 4, 2, 3, 0, 5], 7))

//should return 1.
console.log(pairwise([1, 3, 2, 4], 4))

//should return 1.
console.log(pairwise([1, 1, 1], 2))

//should return 10.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1))

//should return 0.
console.log(pairwise([], 100))