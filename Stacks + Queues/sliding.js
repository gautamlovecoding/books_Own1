// given an array of size n find the maximum value in a current currWindow of size is sliding from left to right

const arr = [1, 3, -1, -3, 5, 3, 6, 7]
/*****
 * [|1, 3, -1|, -3, 5, 3, 6, 7]  => 3
 * [1, |3, -1, -3|, 5, 3, 6, 7]  => 3
 * [1, 3, |-1, -3, 5|, 3, 6, 7]  => 5
 * [1, 3, -1, |-3, 5, 3|, 6, 7]  => 5
 * [1, 3, -1, -3, |5, 3, 6|, 7]  => 6
 * [1, 3, -1, -3, 5, |3, 6, 7|]  => 7
 */

// n= 8, w=3, n-w+1 => 
// total number of currWindow form of size w in an array having size n => n-w+1
// brute force navie approach

let n = arr.length;
let w = 3
let result = []
// for(let currWindow = 0; currWindow<n-w+1; currWindow++) {
//     let max = arr[currWindow]

//     // find the maximum value from a window of size w
//     for(let i = currWindow; i<currWindow+w; i++){

//         // update the max variable if current value of arr at index i is greater than max
//         if(max<arr[i]) {
//             max = arr[i]; 
//             //console.log(max)
//         }
//     }
//     result.push(max)
// }

console.log(result)

// Time Complexity => O(nw)

// observation window size is 5

//    [{1, 3, 5, 0, 1} , 2, 0, 1]  => max = 5
//    [    {3, 5, 0, 1, 2}, 0, 1]  => max = 5

// we will push elements in window in smart way
// in which case element will not needed to (remove from last)
// 1 case: element does not inside the window
// 2 case: if element inside current window is less than incoming element
// else append element in last of window

const deque = [];

for(let cel = 0; cel<w; cel++) {

    while(deque.length>0 && arr[cel]>= arr[deque[deque.length-1]]) {
        deque.pop(); // removing element from last deque which is less than incoming element
    }
    deque.push(cel);
}
console.log(deque)

for(let cel = w; cel<n; cel++) {

    while(deque.length>0 && arr[cel]>= arr[deque[deque.length-1]]) {
        deque.pop(); // removing element from last deque which is less than incoming element
    }
    while(deque.length > 0 && cel-w>=deque[0]){
        deque.shift();
    }
    deque.push(cel)
}

result.push(arr[deque[0]]);
console.log(result)

// time complexity => O(w+n-w+l+2w) => 





