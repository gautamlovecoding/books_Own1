// DP is collection of recursion + memorization
// topDown solution
// break in subproblem and solve subproblems and stores them dependent on bigger problems.
// in fibonacci series = summation of last two numbers (recursion) 

// why calacution for same thing. => This problem will solve by (memorization)


// MEMORIZATION TECHNIQUE
function fib(n, dp) {

    if(n <= 0){
        return 0
    } 
    if(n === 1) {
        return 1
    }

    // check if subproblem is already solved
    if(dp[n] !== -1) {
        return dp[n]
    }

    dp[n] = fib(n-1, dp)+fib(n-2,dp);

    return dp[n]
}

// BOTTOM UP APPROACH
function bottomUpFib(n, dp) {
    dp[0] = 0;
    dp[1] = 1

    for(let i = 2; i<=n; i++) {

        // dp[i] represents the ith term in fibonacci number
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}
// space complexity = O(n)

function optimizedFib(n) {
    let currI = 0, prev = 1, prev2 = 0;

    for(var i = 2; i<=n; i++) {
        currI = prev + prev2;
        prev2 = prev;
        prev = currI
    }
    return currI
}
// space complexity = O(1)

let n = 6;
const dp = (new Array(n+1)).fill(-1);
console.log(dp)
//console.log(fib(6,dp))

// console.log(bottomUpFib(6, dp))
console.log(optimizedFib(6, dp))

// recursion(memoization) = O(n) for call stack + O(n) for dp +O(1)




