//Fibbonacci series in actual order...

// function printFibbo(num){
//     let arr = [];

//     arr[0] = 0
//     arr[1] = 1

//     for(let i=2; i<num; i++){
//         arr[i] = arr[i-2] + arr[i-1]
//     }
//     return arr;
// }

// console.log(printFibbo(5))

//Fibbonacci series in actual order...
function reverseFibbo(num){
    let arr = [];

    arr[0] = 0
    arr[1] = 1

    for(let i=2; i<num; i++){
        arr[i] = arr[i-2] + arr[i-1]
    }
    
    let left=0, right=arr.length-1
    while(left <= right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++;
        right--;
    }
    return arr.join(" ");
}

console.log(reverseFibbo(5))