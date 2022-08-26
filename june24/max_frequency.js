// find highest frequency element in an array
// [1, 2, 3, 2, 4, 2, 1]   => output = 2

function highestFreq(arr){
    let map = new Map()
    let max_freq = 0;
    let high = 0

    for(let el of arr){
        if(map.get(el)){
            map.set(el, map.get(el)+1)
            if(max_freq<map.get(el)){
                max_freq = map.get(el)
                high = el
            }
        }
        else{
            map.set(el, 1)
        }
    }
    console.log(map, max_freq, high)
    return high
}

console.log(highestFreq([1]))
