// 1 1 2 3 5 8 13....

function fib(n){
    if(n==0) return 1
    if(n==1) return 1
    return fib(n-1) + fib(n-2)
}

console.log(fib(5))

// 1 1 3 5 8 11