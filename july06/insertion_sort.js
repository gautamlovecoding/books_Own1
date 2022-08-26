function insertionSort(arr) {
    for(let right = 1; right<arr.length; right++){
        let curr = right;

        while(curr >= 1 && arr[curr-1] > arr[curr]) {
        [arr[curr], arr[curr-1]] = [arr[curr-1], arr[curr]]
        curr--;
       }
     }
     return arr
}

// let arr = [4, 3, 2, 5, 7, 1, 6]

// insertionSort(arr)

// console.log(arr)
console.log(insertionSort([4, 3, 2, 5, 7, 1, 6]))