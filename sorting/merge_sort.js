// it uses divide and conquer technique
// break array in two parts
function mergeSort(arr, start, end){
    if(start >= end) return

    let mid = (Math.round(start+end)/2)
    mergeSort(arr, start, mid)
    mergeSort(arr, mid+1, end)

    merge(arr, start, mid, end)
}

function merge(arr, start, mid, end){
    
}
//console.log(mergeSort())