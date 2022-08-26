// given an array of size n find maximum value in a current window of size w window is sliding from left to right

const arr = [1, 3,-1,-3, 5, 3, 6,7]

// [|1, 3,-1|,-3, 5, 3, 6,7]  => 3
// [1, |3,-1,-3|, 5, 3, 6,7]  => 3
// [1, 3,|-1,-3, 5|, 3, 6,7]  => 5
// [1, 3,-1,|-3, 5, 3|, 6,7]  => 5
// [1, 3,-1,-3, |5, 3, 6|,7]  => 6
// [1, 3,-1,-3, 5, |3, 6,7|]  => 7

// n=8 w=3 n-w+1 => 8-3+1 =>6 

//total number of window format size w in an array having size n=> n-w+1
// brute force native approach
let n = arr.length
let w = 3;
let result = [];
// for(let currWindow = 0; currWindow<n-w+1; currWindow++){
//     let max = arr[currWindow];

//     // find the maximum value from a window of size w
//     for(let i = currWindow; i<currWindow+w; i++){

//         // update the max variable if current value of arr at index i is greater than maximum
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
//     result.push(max)
// }

// console.log(result)

// time complexity => total window (n-w+1) each window runs w times  total TC => (n-w+1)*w => O(nw)

// We will push element in window in an smart way

// in which case element will not needed in window(that will remove)
  //  1 Case: while element does not inside the window
  //  2 Case: while element inside curr window is less than incoming element

  // else append in last of window

const deque = [];
for(let cel = 0; cel<w; cel++){
    while(deque.length>0 && arr[cel]>=deque[deque.length-1]){
        deque.pop(); // removing element from last from deque wwhich is less than incoming element
    }
    deque.push(cel);
}
// console.log(deque);
for(let cel = w; cel<n; cel++){
    result.push(arr[deque[0]])

    while(deque.length>0 && arr[cel]>=deque[deque.length-1]){
        deque.pop(); // removing element from last from deque wwhich is less than incoming element
    }

    while(deque.length>0 && cel-w >= deque[0]){
        deque.shift() // removing element from start from deque wwhich is less than incoming element
    }

    deque.push(cel) // deque [5,4,3]  //incoming element is 3 lesser than the last element present inside the queue

}

result.push(arr[deque[0]]) //last window front element is maximum

console.log(result)