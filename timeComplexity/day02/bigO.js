// Asymptotic Notation
//Three types of Analysis

// example find if 5 is present in an array

// best case input

//var arr = [3, 4, 6, 7, 8, 9, 5]

// 0=>3, 1=>4

// var msg = "element is not present";
// for(var i =0; i<arr.length; i++){
//    if(arr[i] == 5){
//     msg = "element is present";
//     break
//    }
// }
// console.log(msg, i)

// best time complexity of searching an element O(1) omega

// average case arr 1,2,3,4,5,6,7,8,9,3,2 avg time compplexity O(n) theta notation

//worst case time complexity O(n) big oh notation

// quicksort worst case O(n^2) avg case O(nlogn)

// space complexity => total space taken by the algorithm with respect to the input size

// analysis of space => n(arry size) + 20 + 1 => n+11 space complexity O(n)



// in array access of an element time complexity is O(1)
// add element in end of the array O(1) arr.push(10)
// remove element from end of the array O(1) arr.pop()

// insertion in begining in the array
// (operation performed) insertion O(1)+ rearrangement of index O(n)
// total time complexity of insertion in begining of the array is O(n)


// insertion in the middle of the array
// time complexity O(n)

var arr = [3,4,6,7,8,9,5]

// object

var obj = {} // time complexity O(1)

obj.firstName = "saloni"  // obj.key => insertion O(1) constant
obj.lastName = "shukla"
obj.age = 21
obj.destination = "Backenend developer"

// access time complexisty O(1)
console.log(obj.firstName,obj['firstName'])

// deletion time complexity is also O(1)

// searching time complexity in Object is O(n)
// if any key have value 23

// time complexity of Object.values is O(n)
// console.log(Object.values(obj))

// time complexity of Object.enteries is O(n)
// console.log(Object.enteries(obj))

// time complexity of Object.hasOwnProperty is O(1)
console.log(obj.hasOwnProperty('age'))






