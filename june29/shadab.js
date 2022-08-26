// 1. remove duplicates from an array

function removeDuplicates(arr){
    
    // creating set with initial array values
    const set = new Set(arr)
    return [...set]
}

console.log(removeDuplicates([1, 1, 2, 22, 3, 5, 11, 2, 22, 2, 2, 2, 2, 2]))

// 2. take a number and print Foo if it is multiple of  3 and Bar if multiple of 5 and not multiple of 7, and FooBar for multiple of both 5 and 7

function printNum(num){

    //if num is multiple of 3 
    if(num%3 == 0) {
        console.log("Foo")
    }

    //if num is multiple of 5
    else if(num%5 == 0 && num%7!==0) {
        console.log("Bar")
    }

    // if num is multiple of 5 and 
    else if(num%5 == 0 && num%7 ==0) {
        console.log("FooBar")
    }
    else {
        console.log("nothing")
    }

}

printNum(15)
printNum(20)
printNum(35)
printNum(16)

//3. check valid number

function isValidNumber(input='') {
    let isNumber = true

    for(let i =0; i<input.length; i++) {

        if(input[i]>='0' && input[i]<='9') {
            continue;
        }
        else {
            isNumber = false
            break;
        }
    }

    return isNumber
}
//console.log(isValidNumber("1245782345"))

/***** Another Approach ****/

function isValidNumberUsingRegex(input=''){

    const regex = new RegExp("^[0-9]+$")
    return regex.test(input)
}

console.log(isValidNumberUsingRegex("1245782345"))

// 4. check whether given sum pair exist in an array

function cntDisPairs(arr, sum) {

    const elemSet = new Set()
    const seenSet = new Set()

    let count = 0;

    for(let currValue of arr) {
        const nextValue = sum - currValue
        if(elemSet.has(nextValue) && !seenSet.has(currValue)) {
            count++;
            seenSet.add(nextValue)
            seenSet.add(currValue)
        }
        elemSet.add(currValue)
    }

    return count
}

console.log(cntDisPairs([1, 5, 1, 5, 3, 3], 6))



