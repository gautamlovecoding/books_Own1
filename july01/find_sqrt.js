
function squartRoot(number, left, right) {
    
        let mid = (left +right)/2
        let multi = mid*mid
        if(multi === number || (Math.abs(multi - number) < 0.00001)) {
        return mid
    }

    else if(multi > number) {
        right = mid
        return squartRoot(number, left, mid)
    }
    else{
        left = mid
       return squartRoot(number, mid, right)
    }
  
}



function findSqrt(number) {

    let found = false;
    let i = 1;

    while(found===false) {

        if(i*i === number) {
            found = true;
            console.log(i)
        }
        else if(i*i > number){
            let res  = squartRoot(number, i-1, i);
           console.log(+res.toFixed(5));
            found = true
        }
        i++
    }
}

findSqrt(15)