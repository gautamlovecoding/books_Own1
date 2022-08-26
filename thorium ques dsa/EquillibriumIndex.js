// Question :- [-7, 1, 3, 2, 5, 7, 0], find the equilibrium index from the given array.
// Equilibrium/Pivot index of an array is an index such that the sum of elements at lower indexes 
// is equal to the sum of elements at higher indexes. For example, in an array A: 

// Example : Input: A[] = {-7, 1, 5, 2, -4, 3, 0} 
// Output: 3 
// 3 is an equilibrium index, because: 
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

// Input: A[] = {1, 2, 3} 
// Output: -1 

var pivotIndex = function(nums) {
    let sum=0, leftSum=0;
    
     // sum = nums.reduce((acc,curr)=>curr +=acc);
    
        //--------or-------------------
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
    }
       //-----------------------------
    for(let i=0; i<nums.length; i++){
        sum -= nums[i]
        
    if(sum == leftSum) {
     return i
     }
     leftSum += nums[i] 
       
    }
    return -1;
};

console.log(pivotIndex([-7, 1, 5, 2, -4, 3, 0]));