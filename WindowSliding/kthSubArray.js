// find maximum kth sub array
//let arr =[23,34,6,2,43,89,9]
// function kthMaximumSubarray(k, arr){
//     let maxSumSoFar = 0;
//     let subArr;
//     for(let i =0; i<arr.length-2; i++){
//           let sum = 0;
//           for(let j =0; j<(i+k); j++){
//             sum = sum + arr[j]
//           }
//           if(sum>maxSumSoFar){
//             maxSumSoFar = sum
//             subArr = arr[i]+arr[i+k]
//           }
//     }
//     return subArr
// }
// const arr = [1,2,3,5,4,8,6]

// console.log(kthMaximumSubarray(arr, 3))


function maxSubArraySum(nums, k){
    let currSum =0, maxSumSeen = 0
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i]
        if(i>= k-1){
           maxSumSeen = Math.max(currSum, maxSumSeen);
           currSum -= nums[i-(k-1)];
        }   
    }
    return maxSumSeen
}

const arr1 = [1,2,3,5,4,8,6]

console.log(maxSubArraySum(arr1, 3));