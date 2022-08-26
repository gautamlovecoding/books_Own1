// reverse an array without using extra array
// [32, 2, 6, 7, 4, 12]
// we are solving this using multipointer

function reverseArray(arr){
    let i = 0,  j = arr.length-1

    while(i<j){
        arr[i] = arr[i] + arr[j]
        arr[j] = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]

        i++
        j--
    }
    
    return arr
}

let arr = [32, 2, 6, 7, 4, 12]
console.log(reverseArray(arr))
