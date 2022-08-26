function getMaxValue(arr,k){
    let maxVal = [];
    let que = [];
    let i =0;
    let max = -Infinity;
    while(i<k){
        que.push(arr[i]);
        if(max<arr[i]){
            max = arr[i]
        }
        i++;
    }
    maxVal.push(max)
    for(i=k; i<arr.length; i++){
        if(que.length===k)
        que.shift();
        while(que.length && que[que.length-1]<=arr[i]){
            que.pop()
        }
        que.push(arr[i])
        maxVal.push(que[0])
    }

    return maxVal
}

console.log(getMaxValue([1,3,-1,-3,5,3,6,7],3))