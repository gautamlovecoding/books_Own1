
// 1st: Write a code and run:Take a string (input: "My name is Subhajit") reverse that string (output:"Subhajit is name My")

function revWord(str){
    let arr = str.split(" ");
    l=0,r=arr.length-1;

    while(l<=r){
        [arr[l],arr[r]] = [arr[r],arr[l]]
        l++;
        r--;
    }
    return arr.join(" ");
}

console.log(revWord("My name is Subhajit"));

// 2nd. Given an array of number arrange them in a way that second yields largest value?

function maxValue(arr){
    //1st method..........
    // arr.sort((a,b) => a-b);
    // console.log(arr)
    // let res = arr[arr.length-1];
    // return res;

    //2nd method..........
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
    return secondLargest;
}

let arr= [23,890,534,546,213,453,234,56,76,489,347,890,346,909,234,347,567,909,234,23];
// console.log(maxValue(arr));