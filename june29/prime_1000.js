// WE NEED TO PRINT FIRST 1000 PRIME NUMBERS

//console.log(Math.sqrt(5))

function isPrime(num) {

    for(let i = 2; i<= parseInt(Math.sqrt(num)); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}

//console.log(isPrime(5));

function firstNPrimeNumber(Number) {

    let count = 0;
   for(let i =2; i<Number; i++){
      if(isPrime(i))
      count++
   }  
return count
}

console.log(firstNPrimeNumber(10))  

// time complexity : time takeing to run the code
// space complexity : over all space taken by algorithm code or function