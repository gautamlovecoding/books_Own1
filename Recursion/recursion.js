// recursion(function calling itself with some conditional return or termination)
// if we do not use return or termination then stack overflow occur

// stack is data structure last in first out property.

// const arr = [3, 4, 5, 6, 7, 8];

function printArrayRecursive(index){
    if(index >= arr.length) {
        return
    }
    console.log(arr[index]);
    index = index+1;

    printArrayRecursive(index)

    console.log("id is ", index)
}

printArrayRecursive(0)

// 2. CountDown

function CountDown(count){

    if(count < 0) {
        return
    }

    console.log(count);
    count--
    CountDown(count)
}

CountDown(9)

//3. sumRange with return statement

function sumRange(num){

    if(num == 1){
        return 1
    }

    return num+sumRange(num-1);
}
let res = sumRange(5)
console.log(res)