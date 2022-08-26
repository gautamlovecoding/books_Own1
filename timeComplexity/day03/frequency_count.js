// Problem: find maximum occurances of a charanters in an array
//const arr = ['1','8','8','6','1','2','5','1','9','1','0','6','9','0','0','1','9','2'];
// 1->5, 8->2, 6->2, 2->2, 5->1, 9->3, 0->3

//native approach
 let max_occurance = 0, max_occurance_char = 0 //c
// for(let i=0; i<arr.length; i++){
//     let occur_count = 0; //c
//     for(let j =0; j<arr.length; j++){
//         if(arr[i] == arr[j]){ //c
//             occur_count++ //c
//         }
//         if(occur_count>max_occurance){ //c
//             max_occurance = occur_count //c 5
//             max_occurance_char = arr[i] //c 1
//         }
//     }
// }
// time complexity: c+loop(c+loop(c+c)+c+c+c) => O(c)+n(c+n*(2c)+3c) => O(c)+4nc+2n^2c =>O(n^2)
//console.log(max_occurance,">>>>")

// much optimize code than previous
// let max_occurance = 0, max_occurance_char = 0 //c
// for(let i=0; i<arr.length; i++){
//     let occur_count = 0; //c
//     for(let j =i; j<arr.length; j++){
//         if(arr[i] == arr[j]){ //c
//             occur_count++ //c
//         }
//         if(occur_count>max_occurance){ //c
//             max_occurance = occur_count //c
//             max_occurance_char = arr[i] //c
//         }
//     }
// }
// i =0 {0-n-1} //n times
// i=1 {1, n-1} //n-1 times
// i=2 {2, n-2} //n-2 times
// i=3 {3, n-3} // n-3 times

// i =n-1 {n-1, n-1} // 1 times
// 1+2+3+4+...+n => n*(n+1)/2  1+2+3+4+5 = (5*6/2) => 15
// 1+2+3+...+n-1 => (n*(n-1)/2)  O(n^2)
//console.log(max_occurance,">>>>")

// using object/hash/map
const arr = ['1','8','8','6','1','2','5','1','9','1','0','6','9','0','0','1','9','2'];
let freqObject = {};
// freqObject[1] insertion access and deletion O(1)
for(let i =0; i<arr.length; i++){
    if(freqObject.hasOwnProperty(arr[i])){
        freqObject[arr[i]] += 1
        if(max_occurance<freqObject[arr[i]]){
            max_occurance = freqObject[arr[i]]
            max_occurance_char = arr[i]
            console.log(freqObject)
        }
    }
    else{
        freqObject[arr[i]] = 1
    }
}
//console.log(freqObject)
console.log(max_occurance,">>>>",max_occurance_char)





