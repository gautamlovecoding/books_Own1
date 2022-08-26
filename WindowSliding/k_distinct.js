// find the largest substring with k distinct characters

// "aabacbebebe" , k=3
 
// string is consecutive character

// aabacbebebe
// aabacb  (6)
// abacb   (5)
// bacb    (4)
// acb     (3)
// cbebebe (7)

// possible solution (brute force)
// find all substring and check each substring with k character (O(n^2)) // substring find O(n) each substring check time O(n^3)

// character fixed (0-255)  // 26(a-z)


function isCurrentWindowValid(count,k){
    let curr_u_c = 0;
    for(let i =0; i<count.length; i++){
        if(count[i]>0){
            curr_u_c ++
        }
    }
    return k>=curr_u_c
}

function findKthLargestSubstring(str, k){

    let u_c_count = 0;  // unique character count
    let count = [];     // array contains the frequency of character

    // a-z (26)  // indexing of array is 0,1,2....

    for(let i =0; i<26; i++){
        count.push(0);
    }
    console.log(count)
    //console.log('z'.charCodeAt(0))

    // count the number of unique characters 
    for(let i=0; i<str.length; i++){
        if(count[str[i].charCodeAt(0)-'a'.charCodeAt(0)] === 0){
            u_c_count++;
        }
        count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;
    }
    // if number of unique character is less than k then substring can not possible 
    if(k>u_c_count){
        console.log("substring can not formed")
    }

    //reset the count array 
    for(let i=0; i<26; i++){
        count[i]=0;
    }

    let start = 0;
    let end = 0;

    let max_window_size = 1;
    count[str[0].charCodeAt(0)-'a'.charCodeAt(0)]++;
    
    for(let i=1; i<str.length; i++){
    count[str[i].charCodeAt(0)-'a'.charCodeAt(0)]++;  // tracking the character present inside window
    end++; //increasing the window size

    while(!isCurrentWindowValid(count,k)){
        count[str[start].charCodeAt(0)-'a'.charCodeAt(0)]--;
        start++;  // decrease
    }

    if(end-start+1>max_window_size){
        max_window_size=end-start+1;
        max_window_start = start
    }
}
console.log(max_window_size, max_window_start)
}

findKthLargestSubstring("aabacbebebe",3)
 


/*** Here wend have to find the longest consecutive substring ***/
//let str = "hellothere"  // lother
// let str = "longesstSubtring"  // {subtring}
// let stIdxOfSub = 0
// let edInxOfSub = 0

// let wstart = 0, wend = 0
    
// let windowMap = {}

// while (wend <= str.length - 1) {
//     if (!windowMap[str[wend]]) {
//         windowMap[str[wend]] = 1

//         if (wend - wstart > edInxOfSub - stIdxOfSub) {
//             edInxOfSub = wend
//             stIdxOfSub = wstart
            
//         }
//         wend++
//     } else {
//         while (str[wstart] != str[wend]) {
//             delete windowMap[str[wstart]]
//             wstart++
//         }
//         wstart++
//         wend++
//     }
// }

// let res = ""
// for (let i = stIdxOfSub; i <= edInxOfSub; i++) {
//     res += str[i]
// }

// console.log(windowMap, stIdxOfSub, edInxOfSub, res)



