// we have given  array as input containing 0's and 1's 

// function sort01(arr) {
//     let curr = 0, count0 = 0;

//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === 0){
//             count0++
//         }
//     }

//     let count1 = arr.length-count0

//     while(count0>0) {
//         arr[curr] = 0
//         count0--
//         curr++
//     }

//     while(count1>0) {
//         arr[curr] = 1
//         count1--
//         curr++
//     }
// }
// let arr = [0, 1, 1, 0, 1, 1, 0, 0, 0, 1]
// sort01(arr)

// console.log(arr)


// using O(1)

function sort01(arr) {
    let left = 0, right = arr.length-1
    while(left<right) {

    while(arr[left] === 0 && left<right) {
        left++
    }

    while(arr[right]=== 1 && left<right) {
        right--
    }

    if(left<right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
    }
  }
}

let arr = [0, 1, 1, 0, 1, 1, 0, 0, 0, 1]
sort01(arr)

console.log(arr)