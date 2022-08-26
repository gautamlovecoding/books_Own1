// write a algo to find the least multiplication using 3 values in an array?

function leastMul(arr){
    arr.sort((a,b)=> a-b);

    return arr[0]*arr[1]*arr[2];
}
console.log(leastMul([1,2,5,4,2,6,3]));

// write a algo to find the greatest multiplication using 3 values in an array?

function greatestMul(arr1){
    arr1.sort((a,b)=> b-a)

    return arr1[0]*arr1[1]*arr1[2];
}
console.log(greatestMul([1,2,5,4,2,6,3]));

// Time Complexity - O(nlogn) --> because sort function taking T.C - O(nlogn);

