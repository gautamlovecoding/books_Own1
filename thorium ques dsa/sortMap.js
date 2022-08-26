// Implement a SortedMap in JavaScript.?

// Example 1: In this example, we are sorting the map by the increasing values of keys.

let map1 = new Map([
    [4, 11],
    [2, 3],
  ]);
   
  // Inserting new element into map using set() method
  map1.set(3, 10);
  
  console.log(map1)  // Map(3) { 4 => 2, 2 => 3, 3 => 10 }

  // keys sets in increasing order...

  map1 = new Map([...map1.entries()].sort());

  // Adding the custom sorting logic to sort by decreasing values of value
  map1 = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));




 