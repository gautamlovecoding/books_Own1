// FIND THE MAXIMUM SUM OF ANY TWO ELEMENTS IN AN ARRAY
// [12, 4, 67, 2, 34]

function maxSum(arr){

    let largest = -Infinity, secondLargest = -Infinity
     
    for(let el of arr){
        if(el>largest){
        secondLargest = largest  // 12
        largest = el //67
        }
        
        else if(el>secondLargest){
            secondLargest = el  //34
        }
    }

    return largest + secondLargest
}

console.log(maxSum([12, 4, 67, 2, 34]))

