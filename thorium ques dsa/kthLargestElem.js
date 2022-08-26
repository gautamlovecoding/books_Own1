let arr = [23,890,534,546,213,453,234,56,76,489,347,890,346,909,234,347,567,909,234,23];
// find the kth largest element in an array.

// function kthLargestElem(arr, k){
//     let uniqueVal = new Set(arr);
//     let uniqueArr = [...uniqueVal]
//     uniqueArr.sort((a,b)=> b-a);

//     return uniqueArr[k-1];

// }

var findKthLargest = function(nums, k) {
    // find the largest element
    let largest = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] > largest) largest = nums[i];
    }
    
    // construct a hash map of difference between nums[i] and largest
    const hash = {};
    
    for(let i=0;i<nums.length;i++){
        const diff = largest-nums[i];
        hash[diff] = (hash[diff] || 0) + 1;
    }
    
    // find kth largest number
    let count = 0;
    let diff = 0;
    while(count<k){
        count += (hash[diff] || 0);
        diff++;
    }
    
    return largest - diff + 1;
};

console.log(findKthLargest(arr, 3));