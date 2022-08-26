//Find the hidden number.
//Given an array of integers, find another integer such that, if all the element of the 
//array are subtracted individually from the number, then the sum of all the differences should add to 0.
//if any such integer exists, print the value otherwise "-1"
//Approach
//hidden number =x
//[1,3,5,7,9]=> 1-x + 3-x + 5-x + 7-x + 9-x => (1+3+5+7+9) - 5x => x - average of the elements
function avgInteger(arr) {
    let sum =0;
    for(let elem of arr){
        sum+=elem;
    }

    if(parseInt(sum/arr.length) === sum/arr.length ) {
        return sum/arr.length;
    }else{
        return -1;
    }
}

console.log(avgInteger([1,3,5,7,9]));