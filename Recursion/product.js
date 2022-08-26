// [3, 5, 2, 8]  = 3*5*2*8 => 240

// function product(arr) {
//     if(arr.length == 0) return 1
//     return arr[0]*product(arr.splice(1))
// }

// console.log(product([3,5,2,8]))


function product(arr, n){
    if(n == 0) return arr[n]
    return arr[n] * product(arr[n] - 1)
}

console.log(product([3,5,2,8], 4))



