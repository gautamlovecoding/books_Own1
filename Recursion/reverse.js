// write a program to reverse a string
// Ex: hello => olleh
// hello = reverse("ell")      +h
//          reverse("llo")   +e+h
//          reverse("lo")  +l+e+h
//          reverse("o") +l+l+e+h


function reverseString(str){
    if(str.length<=0)  return str
    return reverseString(str.slice(1)) + str[0]
}
console.log(reverseString("hello"))



// function arrReverse(arr, left, right){
//     if(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         return arrReverse(left+1, right+1)
//     }
    
// }
// let arr = ["saloni", "shukla"]
// console.log(arrReverse(arr, 0, arr.length-1)) 