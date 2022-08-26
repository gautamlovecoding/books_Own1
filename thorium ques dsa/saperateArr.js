1. //var arr = [7, "a", "b", 5, 0.1, "c", 0.5, 9, 1, "e", "m", 0.3, 8.5, 74, 89, "f", "r", 0.5, "x", "y", 4, 7];
// Separate integers, float and string into separate arrays

// function saperate(arr){
//     let arrNum = [], arrStr=[], arrFloat=[];

//     for(let elem of arr){
//         if(typeof elem == "number" && Number.isInteger(elem)){
//             arrNum.push(elem);
//         }
//         if(typeof elem == "string"){
//             arrStr.push(elem)
//         }
//         if(!Number.isInteger(elem) && typeof elem !== "string"){
//             arrFloat.push(elem)
//         }
//     }
//     console.log(arrNum, arrStr, arrFloat)
// }

// saperate([7, "a", "b", 5, 0.1, "c", 0.5, 9, 1, "e", "m", 0.3, 8.5, 74, 89, "f", "r", 0.5, "x", "y", 4, 7]);

// //Find occurances of each letters in a string?
//  const countOccurences = (inputStr) => {
//      let map = new Map();

//      for(let elem of inputStr){
//         map.get(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
//      }
//      return map;
//     }
    
//     const output = countOccurences('abcbccd');
//     console.log(output) // Prints => a: 1, b:2, c: 3, d: 1 

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the
//  same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function(nums) {
    let s = 0;
    let e = nums.length-1;
    let i = 0;
   while(i<=e){
        if(nums[i]==2){
            [nums[i], nums[e]] =  [nums[e], nums[i]]
            e--;
        }
        else if(nums[i]==0){
            [nums[i], nums[s]] = [nums[s], nums[i]]
            s++;
            i++;
        }
       else{
           i++;
       }
    }
    return nums;
}
// console.log(sortColors([1,2,1,0,1,2]));


/***************************Question*****************************************/
// You are given an array of multiple items in an order. Find the total bill amount for all items in the order.
// A flat tax will be added to the bill based on the following conditions:
// If the item is a pizza, the tax will be 5% of the item's price.
// If the item is a drink, the tax will be 18% of the item's price.
// If the item is a snack, the tax is already included in the item's price.

// Output the subtotal, tax amount, and grand total for the order.

const order = {
    customer: {
      name: "John",
      address: {
        street: "123 Main Street",
        city: "Anytown",
        state: "California",
      },
      phone: "555-555-5555",
    },
    items: [
      { name: "Margherita", price: 277.25, type: "pizza" },
      { name: "Mineral Water", price: 20, type: "drink" },
      { name: "Pepperoni", price: 540.1, type: "pizza" },
      { name: "Chicken Wings", price: 200.0, type: "snack" },
      { name: "Coffee", price: 300.0, type: "drink" },
    ],
    date: "June 27, 2022",
  };
  
  /***********************************Solution******************************************/
  let item = order.items;
  let grandTotal = 0, subtotal = 0, taxAmount = 0;
  for(let i=0; i< item.length; i++){
    subtotal += item[i].price;

    if(item[i].type == "pizza"){
        item[i].price *= 1.05
      }

      if(item[i].type == "drink"){
        item[i].price *= 1.18
      }

      grandTotal += item[i].price;

      taxAmount = grandTotal - subtotal;
    
  }

  // console.log(`Subtotal is: ${subtotal}, Grandtotal is: ${grandTotal} and the Taxamount is: ${taxAmount}`);
  
  
//  Ques:- You have given an array 
//  Arr = [1,2,3,4,5,6,7,8] and batch_size=3 
// Out should be look like this 
// Output = [[1,2,3],[4,5,6],[7,8]]

//-------------------------------SPLICE----------------------------------------------------------------------//
// The splice() method changes the contents of an array by removing or replacing existing elements and/or 
// adding new elements in place. To access part of an array without modifying it.
//----------------------------------------SLICE-----------------------------------------------------------//
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from 
// start to end (end not included) where start and end represent the index of items in that array. The original
//  array will not be modified.
//-----------------------------------------------------------------------------------------------------------//

// function sliceIntoChunks(arr, chunkSize) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//       const chunk = arr.slice(i, i + chunkSize);
//       res.push(chunk);
//   }
//   return res;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sliceIntoChunks(arr, 3));

// Running the code above yields the following 
// output:-[[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10 ]]


// function spliceIntoChunks(arr, chunkSize) {
//   const res = [];
//   while (arr.length > 0) {
//       const chunk = arr.splice(0, chunkSize);
//       res.push(chunk);
//   }
//   return res;
// }

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(spliceIntoChunks(arr2, 3));



// 1.const words=["cat","baby","dog","bird","car","ax"]
// const string1="tcabninjs" -ouptut:-cat
// const string2="tbcanihjs"-ouptut:- cat
// const string3="baykkjl" -output:-null





// 2.head -> 1-2-3-4-5-6-5
// value of k =5
// 7-8-9-10-11
// value of k= 10
// linked list question



//Move all zero to the end of the array.

let arr = [1, 2, 0, 4, 3, 0, 5, 0];

function moveAllZero(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== 0){
      arr[count] = arr[i];
      count++;
    }
  }

  for(let i=count; i<arr.length; i++){
    arr[i] = 0
  }

  return arr;

}
console.log(moveAllZero(arr))


// 1.Write a code for a LinkedList, And we have 2 given numbers in an array and 
// we have to fill automatically the middle number in an array.



