/**
 Question:-
 find out the first greatest and second greatest element in the array and print the 
 count how many times this numbers are present in the array
let arr= [23,890,534,546,213,453,234,56,76,489,347,890,346,909,234,347,567,909,234,23]
 */


function greatestCount(arr){
    let max = -Infinity;
    let secondLargest;
    for(let elem of arr){
        if(elem > max){
             secondLargest = max;
            max = elem;
        }else if(secondLargest < elem && elem < max){
            secondLargest = elem;
        }
    }

    // console.log(max, secondLargest)

    let firstCount = 0, secCount = 0;
    for(let elem of arr){
        if(elem == max) firstCount++;
        
        if(elem == secondLargest) secCount++;
    }
    console.log(`First largest number is ${max} and its occurance is:- ${firstCount}`);
    console.log(`Second largest number is ${secondLargest} and its occurance is:- ${secCount}`);
}

greatestCount([23,890,534,546,213,453,234,56,76,489,347,890,346,909,234,347,567,909,1000,1000,234,23]);

/**-------------------------OR----------------------------****************/
// function max(arr){
//    let largest =0, secondLargest=arr.length-1;

//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > largest){
//         secondLargest = largest;
//         largest = arr[i]
//     }else if(arr[i] < largest && arr[i] > secondLargest){
//         secondLargest = arr[i]
//     }
    
//    }
//    console.log(largest, secondLargest)
// }

// max([23,890,534,546,213,453,234,56,76,489,347,890,346,909,234,347,567,909,234,23]);