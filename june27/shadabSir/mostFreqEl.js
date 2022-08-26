//Question==>Return the most freq element in an array.

const mostFreqElem = (arr) => {
    let map = new Map();
    let maxFreq =1, maxFreqElem = arr[0]
    for(let elem of arr){
        if(map.get(elem)) {
            map.set(elem, map.get(elem)+1)
            //chance to previous freq can be less than map.get(elem)
            if(maxFreq < map.get(elem)){
                maxFreq = map.get(elem);
                maxFreqElem = elem;
            }
        }else{
            map.set(elem , 1)
        }
    }
    console.log(maxFreqElem, maxFreq)
}

mostFreqElem([1,2,4,5,,1,4,5,2,5,4,2,1,2]);