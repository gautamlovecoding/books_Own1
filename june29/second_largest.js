// find second largest number in an array

function secondLargest(arr) {
    let lastMax = arr[0];
    let secondLargest = -Infinity

    for(let i =0; i<arr.length; i++){
    if(arr[i] > lastMax) {
        secondLargest = lastMax
        lastMax = arr[i]
        
    }  else if(arr[i] > secondLargest) {
        secondLargest = arr[i]
    }
  }
  return secondLargest
}
console.log(secondLargest([2, 4, 5, 9, 8, 4]))