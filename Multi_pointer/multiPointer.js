// given a sorted array of integer whether a pair exist with given sum
//asked in google interview
//let arr = [2,3,4,6,8,9]  // (a+b= given sum)  (4,9)

// function isGivenPresent(sum){
//     isPairExist = false
//     for(let i = 0; i<arr.length-1; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if((arr[i]+arr[j]) == sum){
//                 isPairExist = true
//             }
//         }
//     return isPairExist
// }
// console.log(isGivenPresent(13))
// time complexity: O(n^2)

// using pointer
function optimalIsGivenPresent(sum){
    let left =0, right= arr.length-1;
    let isPairExist = false
    while(left<right){
        if(arr[left]+arr[right] == sum){
            isPairExist = true
            break;
        } else if(arr[left]+arr[right]>sum){
            right--
        } else{
            left++;
        }
    }
    return isPairExist
}
//console.log(optimalIsGivenPresent(1))
// time complexity:  O(n)


//find the pairs in an shorted Array whose sum is closest to x ---time complexity O(n)
// given a sorted array of integer find the pair that sums closest to 12
let arr = [1,2,5,8,9,14];
function closestSum(c){
    let left =0, right = arr.length-1
    let leftSum = 0, rightSum =0
    let distance = Infinity
    while(left<right){
        if(Math.abs((arr[left] + arr[right]) - c)< distance){
            leftSum = left
            rightSum = right
            distance = Math.abs(arr[left] + arr[right] - c)
        }
        if(arr[left]+arr[right]> c)
        right--
        else
        left++
    }
    console.log(arr[leftSum], arr[rightSum])
}
closestSum(12)