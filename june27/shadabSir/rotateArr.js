function rotateArr(arr, k) {
    let temp = (new Array(arr.length)).fill(0)
    // console.log(temp)

    for (let i = 0; i < arr.length; i++) {
        const shiftIndex = (i+k)%arr.length; //(0 to arr.length-1) index range
        temp[shiftIndex] = arr[i];
        
    }
    //copy temp element in original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i]
        
    }
}

let arr = [1,2,5,8,7]
rotateArr(arr, 2)
console.log(arr)