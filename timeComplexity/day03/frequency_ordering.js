//Problem find the maximum occurance of a character in an array
// const array = ['1','8','8','6','1','2','5','5','5','1','9','1','8','6','9','0','0','1','9','2']
// //1-->5, 8-->3, 6-->2, 2-->2, 5--> 3, 9-->3,0-->2

// // Native Approach-----> time complexity == O(n^2)
// let max_occurance=0, max_accurance_character = null
// for(let i=0; i<array.length; i++){
//     let currentCharacterCount =0;
//     for(let j=0; j<array.length; j++){
//         if(array[i]==array[j]){
//             currentCharacterCount += 1
//         }
//     }
//     if(currentCharacterCount>max_occurance){
//         max_occurance = currentCharacterCount;
//         max_accurance_character= array[i];
//     }
// }
// console.log(max_occurance, ">>>>>>>", max_accurance_character);

// ===================OR================================
//freq Ordering approach
const array = ['1', '8', '8', '8', '1', '2', '8', '5', '5', '1', '8', '1', '8', '6', '9', '0', '0', '1', '9', '2']

let max_occurance = 0, max_accurance_character = null
let freqObj = {}

for (let i = 0; i < array.length; i++) {
    if (freqObj.hasOwnProperty(array[i])) {
        freqObj[array[i]] += 1
    } else {
        freqObj[array[i]] = 1
    }

    if (max_occurance < freqObj[array[i]]) {
        max_occurance = freqObj[array[i]];
        max_accurance_character = array[i];
    }
}
console.log(max_occurance, ">>>>>>>", max_accurance_character);


//problem to check the square in element of one array to another array if present return true otherwise return false

//Brute force approach..
function squared(array1, array2) {
    if (array1.length !== array2.length) return false

    for (let i = 0; i < array1.length; i++) {
        let foundIndex = array2.indexOf(array1[i] ** 2)  
        if (foundIndex === -1) return false

        array2.splice(foundIndex, 1)
    }
    return true
}
// console.log(squared([1, 2, 3, 4], [1, 4, 9, 16]))
// console.log(squared([1, 2, 3, 4], [1, 4, 9, 6]))

//Frequency counter
function squared2(array1, array2) {
    if (array1.length !== array2.length) return false
    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let num of array1) {
        freqCounter1[num] = freqCounter1[num] + 1 || 1;
    }

    for(let num of array2) {
        freqCounter2[num] = freqCounter2[num] + 1 || 1;
    }

    for(let key in freqCounter1) {
       //if(!(key**2 in freqCounter2)) return false

       if(freqCounter1[key] !== freqCounter2[key**2]) return false
    }
    return true
 
}
console.log(squared2([1, 2, 3, 4], [1, 4, 9, 16]))
console.log(squared2([1, 2, 3, 4], [1, 4, 9, 6]))