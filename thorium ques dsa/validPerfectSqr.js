//Ques:-Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

var isPerfectSquare = function(num) {
    let left = 1, right = num;
    
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let square = mid * mid;
        
        if(square == num){
            return true;
        }else if(square > num){
            right = mid-1;
        }else{
            left = mid+1
        }
    }
    return false;
};

//  L     m      r                        
// (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)

//Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must
// be unique and you may return the result in any order.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

function intersectionArr(num1, num2){
    let set1 = new Set(num1)
    let set2 = new Set(num2)
    let res = [];

    for(let elem of set1){
        if(set2.has(elem)) res.push(elem)
    }

    return res;

}

console.log(intersectionArr([1,2,2,1],[2,2]));

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(arr1, arr2) {
 // Median of a sorted array of size n is defined as the middle element when n is odd and average of middle two elements when n is even.
   let i=0, j=0, result = [];
    
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j]);
            j++
        }
    }
    
    while(i < arr1.length){
        result.push(arr1[i])
            i++;
    }
    
    while(j < arr2.length){
        result.push(arr2[j]);
            j++
    }
    
    let output = 0;
    let n = result.length;
    
    if(n % 2 !== 0){
        output = result[Math.floor(n/2)]
    } else{
        let avg = (result[n/2] + result[((n/2)-1)]);
        
        output = avg/2;
    }
    
    return output;
    
};

console.log(findMedianSortedArrays([1,3],[2]));