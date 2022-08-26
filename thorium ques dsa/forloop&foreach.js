//Difference between for loop and forEach method....

const arraySparse = [1, 3,, 7];
// let count = 0;
// for(let elem of arraySparse){
//     console.log(elem)   // expected output : 1 3 undefined 7
//     count++;
// }
// console.log(count);     //expected output : 4

let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log( element );  //expected output : 1 3 7
  numCallbackRuns++;
});

console.log(numCallbackRuns)  // expected output : 3

///////////////////////////2nd Example////////////////////////////////
const items = ['item1', 'item2', 'item3'];
const copyItems = [];

// before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// console.log(copyItems);  // expected output : ['item1', 'item2', 'item3']

// after
items.forEach((item) => {
  copyItems.push(item);
});

console.log(copyItems);  // expected output : ['item1', 'item2', 'item3']