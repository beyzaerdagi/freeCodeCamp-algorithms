export function updateInventory(arr1, arr2) {
    if(arr1.length>arr2.length){
        for(let i=0;i<arr2.length;i++){
            let find = false
            for(let j=0;j<arr2.length;j++){
                if(!arr1[i][1].includes(arr2[j][1])){
                    find = true
                }else{
                    arr1[i][0] += arr2[j][0]
                    find = false
                    break
                }
            }
            if(find){
                arr1.push(arr2[i])
            }
        }
        arr1 = sortArr(arr1)
        return arr1
    }else{
        for(let i=0;i<arr1.length;i++){
            let find = false
            for(let j=0;j<arr1.length;j++){
                if(!arr2[i][1].includes(arr1[j][1])){
                    find = true
                }else{
                    arr2[i][0] += arr1[j][0] 
                    find = false
                    break
                }
            }
            if(find){
                arr2.push(arr1[i])
            }
        }
        arr2 = sortArr(arr2)
        return arr2
    }
}

function sortArr(arr){
    arr.sort(function (a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;})
    return arr
}