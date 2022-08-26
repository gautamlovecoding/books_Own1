// write a function to calculate the max sum of three consecutive elements in an array

function simpleMaxSumOf3Consecutive(arr) {

    if(arr.length<3) {
        return
    }

    let currMax = -Infinity
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i]+arr[i+1]+arr[i+2]>currMax) {
            currMax = arr[i]+arr[i+1]+arr[i+2]
        }
    }
    return currMax
}

//console.log(simpleMaxSumOf3Consecutive([11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 48, 4, 4, 48]))
console.log(simpleMaxSumOf3Consecutive([1, 3, 2, 6, 11, 4, 32, 22]))


// write a function to calculate the max sum of K consecutive elements in an array
// TC => O(n^2)
function simpleMaxSumOfKConsecutive(arr, k) {

    if(arr.length<k) {  
        return
    }
    let currMax = -Infinity
    for(let i = 0; i<arr.length-k; i++) {
        let sum = 0;
        for(let j=i; j<k+i; j++) {
            sum += arr[j]
        }
        if(sum>currMax) {
            currMax = sum
        }
    }

    return currMax;
    
}

console.log(simpleMaxSumOfKConsecutive([1, 3, 2, 6, 11, 4, 32, 22], 3))

// for O(n)

function simpleMaxSumOfK(arr, k) {

    if(arr.length<k) {
        return
    }

    let currMax = -Infinity
    let totalSum = 0, leftWindowItemSum = 0;
    for(let i = 0; i<k; i++) {
           totalSum += arr[i]
    }
    currMax = totalSum
    for(let i = k; i<arr.length; i++){
        leftWindowItemSum += arr[i-k]
        totalSum += arr[i]
        if(totalSum-leftWindowItemSum>currMax){
            currMax = totalSum - leftWindowItemSum
        }
    }

    return currMax
}

console.log(simpleMaxSumOfK([1, 3, 2, 6, 11, 4, 32, 22], 3))
