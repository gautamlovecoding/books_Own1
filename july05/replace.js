//Replace each element by difference of array size and freq. of the element.
//!7 [1 2 5 2 2 5 4] => [6 4 5 4 4 5 6]

function replace(arr){
    let map ={};

    for(let elem of arr){
        map[elem] = map[elem] + 1 || 1;
    }
    for(let i=0; i<arr.length; i++){
        arr[i] = arr.length -map[arr[i]];
    }
    return arr;
}

console.log(replace([1, 2, 5, 2, 2, 5, 4]));