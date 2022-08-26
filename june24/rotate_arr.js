// write a js program to cyclically rotate an array - rotate(arr, d) that rotate arr by d elements

let reverse = function(num, start, end){

    while(start < end){
      
        let temp = num[start]
        num[start] = num[end]
        num[end] = temp
        
        start++
        end--
    }
    return num
}

var rotate = function(arr, d) {
        d = d % arr.length  
        reverse(arr, 0, arr.length-1)
        reverse(arr, 0, d-1)
        reverse(arr, d, arr.length-1)
    
    return arr
}

console.log(rotate([12, 3, 6, 2, 9, 11], 2))