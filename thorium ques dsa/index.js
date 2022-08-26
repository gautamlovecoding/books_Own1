// 1.Input = 23.4  output = 23
//     Input = 23.5 or 23.8 output = 24
// Write javascript program for above operation .Don't use math function.
// 2.Input A=[1,0,6,2] B=[2,4,1,0]  output =[3,4,7,2]
//    Input  A = [3,7,1] B=[2,4,6]    OUTPUT =[6,1,7]

// Simply write JS program to add two array

// Ques 1.Input = 23.4  output = 23
//     Input = 23.5 or 23.8 output = 24

//Using inbuilt function
console.log((23.4).toFixed());    //expected output-23
console.log(parseInt(23.4));      //expected output-23

//using bitwise operator.
function float2int (value) {
    return value | 0;
}

float2int(3.75); //3 - always just truncates decimals

// Positive(Bitwise or operator)
// console.log(10.1 | 0); // 10
// console.log(10.5 | 0); // 10
// console.log(10.9 | 0); // 10

// Negative
// console.log(-10.1 | 0); // -10
// console.log(-10.5 | 0); // -10
// console.log(-10.9 | 0); // -10

// Positive(bitwise Xor operator)
// console.log(10.1 ^ 0); // 10
// console.log(10.5 ^ 0); // 10
// console.log(10.9 ^ 0); // 10

// Negative
// console.log(-10.1 ^ 0); // -10
// console.log(-10.5 ^ 0); // -10
// console.log(-10.9 ^ 0); // -10


//Subtract the fractional part.
const x = 10.5;
const y = -10.5;

console.log(x - x%1);


