// 5.check string is palindrome or not even after removing the character from it(not we have to allow only one
//  removal of character from string at a time (at most 1 character at a time))
//-----------------------------OR----------------------------------//
// Remove a character from a string to make it a palindrome.

// function palindromeStr(str, left, right) {
//   while (left < right) {
//     if (str[left] === str[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true;

// }

//recursion
function palindromeStr(str, left, right) {
    if (left >= right) return true;

    if(str[left] !== str[right]) return false;

    return palindromeStr(str, left+1, right-1);
}
let str = "levael"
let left = 0;
let right = str.length-1
console.log(palindromeStr(str, left, right));


// function possiblePalinByRemovingOneChar(str) {
//   let low = 0,
//     high = str.length - 1;

//   while (low < high) {
//     if (str[low] == str[high]) {
//       low++;
//       high--;
//     } else {
//       if (palindromeStr(str, low + 1, high)) return true;

//       if (palindromeStr(str, low, high - 1)) return true;
//       return false;
//     }
//   }
//   return true;
// }

// console.log(possiblePalinByRemovingOneChar("abcbea"));
// console.log(possiblePalinByRemovingOneChar("level"));
// console.log(possiblePalinByRemovingOneChar("abecbea"));



// //Given a string s which consists of lowercase or uppercase letters, return the length of 
// //the longest palindrome that can be built with those letters.
// // abccba
// // longest - 6

var longestPalindrome = function(s) {
  let obj = {};
  let count = 0;
  
  for(let elem of s){
      if(obj[elem]){
          obj[elem]++
      }else{
          obj[elem] = 1
      }
    
      
      if(obj[elem]%2===0){
          count +=2;
      }
  }
  console.log(obj, ">>>>>>",count)
  // count += count<s.length ? 1 : 0
  
  if(count< s.length){
      count++;
  }
  return count;
};

console.log(longestPalindrome("abccbaaabz"))

// 9.check distinct element and stored value in that
// k=value given
// let arr = [1,2,1,3,4,2,3];
// [ 3, 4, 4, 3 ]

