//Given a string s, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let start=0, end=0, maxLength=0;
    
    const uniqueChar = new Set()
    
    while(end< s.length){
        if(!uniqueChar.has(s[end])){
            uniqueChar.add(s[end])
            end++
            maxLength = Math.max(maxLength, uniqueChar.size)
        }else{
            uniqueChar.delete(s[start])
            start++
        }
    }
    return maxLength
};

let result = lengthOfLongestSubstring("pwwkew")
console.log(result)
