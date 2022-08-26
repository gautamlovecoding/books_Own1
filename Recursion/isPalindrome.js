// CHECK IF A STRING IS PALINDROME OR NOT
// "naman" = "naman"

function isPalindrome(str){
    if(str.length <= 0) return true

    if(str[0] == str.slice(-1));
    return isPalindrome(str.slice(1,-1))
}

