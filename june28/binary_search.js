function binarySearch(arr, start, end, num){
    if(end >= start){
        mid = Math.floor((start+end)/2)
        if(num == arr[mid]) return mid
        else if(num > arr[mid]) return binarySearch(arr, mid+1, end, num)
        else if(num < arr[mid]) return binarySearch(arr, start, mid-1, num)
    }
    return false
}

console.log(binarySearch([2, 3, 4, 5, 7, 9], 0, 8, 8))

// TC=> O(logn)