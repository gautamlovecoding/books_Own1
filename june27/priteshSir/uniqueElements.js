// given an array filter out duplicate elements and give unique elements

function uniqueElements(arr){
    let map = new Map()
    for(let i =0; i<arr.length; i++){
        if(map.get(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }
        else{
            map.set(arr[i], 1)
        }
    }
    let res = []
    for(let pairs of map){
        if(pairs[1] == 1)
        res.push(pairs[0])
    }
    return res
}

console.log(uniqueElements([1, 1, 2, 22, 3, 5, 11, 2]))


