// check a number is prime or not

// prime number ( A number is divided by itself and 1 only is prime) ex:  2 3 5 7 11 13 17

// function isPrime(num) {

//     for(let i = 2; i<= parseInt(num/2); i++) {
//         if(num % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// TC => O(n)
/***** ANOTHER PPROACH */
function isPrime(num) {

    for(let i = 2; i<= parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}


// TC => O(root n)
// SC => O(1)


console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(10))
