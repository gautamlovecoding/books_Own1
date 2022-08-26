// swap two strings without using third variable 
//  APPROACH:    a = a + b,   b = a - b,    a = a - b

let str1 = "something", str2 = "good"

str1 = str1 + str2   //somethinggood
console.log(str1)
str2 = str1.substring(0, str1.length - str2.length) //(0, 9) // something
str1 = str1.substring(str2.length)    // good
console.log(str1, str2)











