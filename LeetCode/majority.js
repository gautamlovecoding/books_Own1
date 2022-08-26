// why we use for of:    it iterates items(not index) in an array.
var majorityElement = function(nums) {
    let count = 0;
    let candidate;
    for(const n of nums) {
        console.log(n, "n values")
        if(count === 0) 
            candidate = n;
            console.log(candidate, "candidate values")
        
        if(n === candidate) count++;
        else count--;
    }
    
    return candidate;

};
let result = majorityElement([3,2,1,1,1,2,2])
