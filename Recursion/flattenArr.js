// [1, 2, [3,4,5], [6,7]]
// [1] concat with flattenArr([2,  [3,4,5], [6,7]])
// [1,2] concat with flattenArr([ [3,4,5], [6,7]])
// [1,2,] concat with flattenArr([ [3,4,5]) concat with flattenArr([6,7]])
// [1,2,3,4,5] concat with flattenArr([6,7])
// [1,2,3,4,5,6,7]

function flattenArr(arr){
    let flat = []
    for(let i =0; i<arr.length; i++){
        if(Array.isArray( arr[i] )== false) {
            flat.push(arr[i])
        }
        else flat = flat.concat( flattenArr(arr[i]))
    }
    return flat;
}
console.log(flattenArr([[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]])); 

//8.Print the longest palindrome available inside the string
// abccba
// longest - 6



















// 9.check distinct element and stored value in that
// k=value given
// let arr = [1,2,1,3,4,2,3];
// [ 3, 4, 4, 3 ]


