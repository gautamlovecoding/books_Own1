//write a program to calculate maximum possible sum in an array.

//Hint - always summation of maximum two element in an array is maximum sum in an array 

const largestTwoNumSum = (array) => {
    let firstMax =array[0], secondMax = -Infinity;

    for(let elem of array) {
        if(elem >= firstMax){
            secondMax = firstMax;
            firstMax = elem;
        }else if(elem > secondMax){
            secondMax = elem;
        }
    }
    return firstMax+secondMax;
}

console.log(largestTwoNumSum([1,2,5,8,9,7,4,1,10]))