//given an array having 0 and 1, print 0 on left side of array and all 1.in right side, don't sort

// ex:-[0,1,1,0,1,0,1,1,0,1]  ===>  [0,0,0,0,1,1,1,1,1,1]

function zeroAnd1Arrange(arr) {
  /* Initialize left and right indexes O(n)*/
  let left = 0, right = arr.length - 1;

  while (left < right) {
    /* Increment left index while we see 0 at left */
    while (arr[left] == 0 && left < right) left++;

    /* Decrement right index while we see 1 at right */
    while (arr[right] == 1 && left < right) right--;

    /* If left is smaller than right then there is a 1 at left
            and a 0 at right. Exchange arr[left] and arr[right]*/
    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
  return arr;
}
console.log(zeroAnd1Arrange([0, 1, 1, 0, 1, 0, 1, 1, 0, 1]));

/***********************************or******************************/
function segregate0and1(arr){
    let count = 0; // Counts the no of zeros in arr
    let n = arr.length;
 
    for (let i = 0; i < n; i++) {
        if (arr[i] == 0)
            count++;
    }
 
    // Loop fills the arr with 0 until count
    for (let i = 0; i <count; i++){
        arr[i] = 0;
    }
 
    // Loop fills remaining arr space with 1
    for (let i = count; i < n; i++){
        arr[i] = 1;
    }

    return arr;
}

console.log(segregate0and1([0, 1, 1, 0, 1, 0, 1, 1, 0, 1]));



