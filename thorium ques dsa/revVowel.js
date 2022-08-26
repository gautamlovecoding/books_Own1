//WAP to reverse vowels occuring in a string.
//  Eg: input - hello
//  Output - holle
/*********or*************** */
// 2. Replacing the  vowels 
// Input : hello
// Output : holle 
// Input : hello world
// Output : hollo werld


function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var reverseVowels = function(s) {
    let char = s.split("");
    let vowel = {};
    let str = "aeiouAEIOU"
    
    for(let char of str){
        vowel[char] = true;
    }
    
    let left =0, right = char.length-1;
    
    
    while(left < right){
        while(left < right && !(s[left] in vowel)){
            left++;
        }
        
        while(left < right && !(s[right] in vowel)){
            right--;
        }
        
        swap(char, left, right)
        left++;
        right--;
        
    }
    return char.join("");
    
};

console.log(reverseVowels("hello"));