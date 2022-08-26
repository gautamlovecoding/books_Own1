// WRITE A PROGRAM TO CAPITALISE THE FIRST LETTER OF ALL THE STRINGS GIVEN IN AN ARRAY.
// EXAMPLE: ["cat", "dog", "rat"]

const arr = ["cat", "dog", "rat"]
function capitalizeElem(arr, index){

    if(index<arr.length) {
        arr[index] = arr[index][0].toUpperCase()+arr[index].slice(1);
        capitalizeElem(arr, index+1)
    }
}

capitalizeElem(arr, 0)

console.log(arr)

