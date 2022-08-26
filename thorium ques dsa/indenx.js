// 9.check distinct element and stored value in that
// k=value given, if value of k=1 then, we have to remove the 1st occurence of the elment in the array?
// let arr = [1,2,1,3,4,2,3];
// [ 3, 4, 4, 3 ]

// let arr = [1, 2, 1, 3, 4, 2, 3];

// function arrStored(arr, k) {
//     let arr1 = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== k) {
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }

// console.log(arrStored(arr, 1));


let arr = [1, 2, 1, 1,3, 4, 2, 3];
let k = 1;

function arrStored(arr) {
    let index = arr.indexOf(k); // lastindexof(k)
    console.log(index)

    if (index > -1) {
        arr.splice(index, 2) //The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found.

    }
    return arr;
}

console.log(arrStored(arr, k));

