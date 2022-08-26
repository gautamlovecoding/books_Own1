// Missing number in an unsorted array
// 1, 2, 3, 4, 6,7 => 5 is missing number

function missingNumber1n(arr=[]){

    let maxNumber = Math.max(...arr)
    let totalSum = 0
    for(let i =0; i<arr.length; i++) {
        totalSum += arr[i]
    }

    return (maxNumber*(maxNumber+1)/2) - totalSum
}

//console.log(missingNumber1n([1, 2, 3, 4, 6, 7]))

//  not guranteed n  

function missingNumber(arr=[]) {
    let min = Math.min(...arr);

    for(let i = 0; i<arr.length; i++) {
        arr[i] = arr[i]-min+1
    }

    let missNumber1n = missingNumber1n(arr);

    return missNumber1n+min-1;
}

console.log(missingNumber([8, 10, 11, 12, 13, 15, 9]))