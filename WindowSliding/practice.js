// find largest substring with k distinct characters

function isValidCurentSubstring(count, k){

}

function isLargestSubstring(str, k){
    let u_char_count = 0;  //unique characters count
    let count = [];
    for(let i = 0; i<26; i++){
        count.push(0)
    }
    console.log(count)
    console.log('a'.charCodeAt(0))

    for(let i =0; i<str.length; i++){
        if(count[str[i].charCodeAt(0) - "a".charCodeAt(0)]===0){
            u_char_count++
        }
        count[str[i].charCodeAt(0) - "a".charCodeAt(0)]++
    }

    if(k>u_char_count){
        console.log("substring can not be formed")
    }

    //reset the current array 
    for(let i=0; i<26; i++){
        count[i] = 0
    }
    let start = 0;
    let end = 0;
    let max_window_size = 1;
    count[str[0].charCodeAt(0) - "a".charCodeAt(0)]++

    for(let i=1; i<str.length; i++){
        count[str[i].charCodeAt(0) - "a".charCodeAt(0)]++
        end++

    }


}

isLargestSubstring("aabacbebebe", 3)