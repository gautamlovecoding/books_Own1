// time complexity: time taken by code, algorithm or function
var a = 1   //c (constant time)
var b = 2   //c
var c = a+b  // c(addition) + c(assginmrnt) =>2c = c

let arr = [];  //c

// Program to calculate total even numbers in an array.

arr = [1,2,5,7,5,10,12,20];   //8c
let count = 0;                //c
for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 ==0){       //c
        count = count + 1      // 2c
    }
}
console.log(count)

// total time complexity => c + loop(c+2c) => c+loop(3c) => c+(8*3c)  =>  25c

// let arr = [1,3,5,6] => c+loop(3c) =>  c+(4*3c)  =>  13c