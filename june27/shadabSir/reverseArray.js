//Reverse the array without using extra array.
//Example [1,2,5,8,7,6]  ====> [6,7,8,5,2,1]
//Taking two pointer left and right 
//while left< right, swap these values
//left++, right--

const revArray = (array) => {
    let left =0, right=array.length-1;
    while(left < right){
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--
    }
    return array
}

console.log(revArray([1,2,5,8,7,6]))