//Smallest window that contains all characters of string itself

// const MAX_CHARS = 256;
 
// // Function to find smallest window containing
// // all distinct characters
// function findSubString(str)
// {
//     let n = str.length;
 
//     // Count all distinct characters.
//     let dist_count = 0;
//     let hash_map = new Map();
//     for (let i = 0; i < n; i++) {
//         if(hash_map.has(str[i])){
//             hash_map.set(str[i],hash_map.get(str[i])+1);
//         }
//         else hash_map.set(str[i],1);
//     }
 
//     dist_count = hash_map.size;
//     let size = Number.MAX_VALUE;
//     let res;

//     // Now follow the algorithm discussed in below
//     for (let i = 0; i < n; i++) {
//         let count = 0;
//         let visited= new Array(MAX_CHARS).fill(0);
//         let sub_str = "";
//         for (let j = i; j < n; j++) {
//             if (visited[str.charCodeAt(j)] == 0) {
//                 count++;
//                 visited[str.charCodeAt(j)] = 1;
//             }
//             sub_str += str[j];
//             if (count == dist_count)
//                 break;
//         }
//         if (sub_str.length < size && count == dist_count)
//         {
//             res = sub_str;
//             size = res.length;
//         }
//     }
//     return res;
// }

// console.log(findSubString("aabcbcdbca"))

const MAX_CHARS = 256;
 
// Function to find smallest window containing
// all distinct characters
function findSubString(str)
{
    let n = str.length;
 
    // if string is empty or having one char
    if (n <= 1)
        return str;
 
    // Count all distinct characters.
    let dist_count = 0;
    let visited = new Array(MAX_CHARS).fill(false);
    for (let i = 0; i < n; i++) {
        if (visited[str.charCodeAt(i)] == false) {
            visited[str.charCodeAt(i)] = true;
            dist_count++;
        }
    }

    let start = 0, start_index = -1, min_len = Number.MAX_VALUE;
 
    let count = 0;
    let curr_count = new Array(MAX_CHARS).fill(0);
    for (let j = 0; j < n; j++) {
        // Count occurrence of characters of string
        curr_count[str.charCodeAt(j)]++;
 
        // If any distinct character matched,
        // then increment count
        if (curr_count[str.charCodeAt(j)] == 1)
            count++;
 
        // if all the characters are matched
        if (count == dist_count) {
            // Try to minimize the window i.e., check if
            // any character is occurring more no. of times
            // than its occurrence in pattern, if yes
            // then remove it from starting and also remove
            // the useless characters.
            while (curr_count[str.charCodeAt(start)] > 1) {
                if (curr_count[str.charCodeAt(start)] > 1)
                    curr_count[str.charCodeAt(start)]--;
                start++;
            }
            // Update window size
            let len_window = j - start + 1;
            if (min_len > len_window) {
                
                min_len = len_window;
                start_index = start;
            }
        }
    }
 
    // Return substring starting from start_index
    // and length min_len
    return str.substring(start_index, min_len + start_index);
}

console.log(findSubString("aabcbcdbca"))
