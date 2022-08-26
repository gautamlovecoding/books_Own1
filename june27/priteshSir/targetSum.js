// find pairs of elements whose sum is equal to a target k

function targetSum(arr, k) {
    let map = new Map()
    for(let el of arr){
        if(map.get(el)) {
            map.set(el, map.get(el)+1)
        }
        else {
            map.set(el, 1)
        }
    }
    console.log(map)
}
let map1 = new Map()
for(let pairs of map){
    if(k-pairs[0]){
        map1.set(pairs[0], pairs[1])
    }
    else{

    }
}

/***************ANOTHER APPROACH ************/
function pairSum(arr, sum) {
    let map = {}
    for(let el of arr){
        map[el] = map[el] + 1 || 1
    }

    let pair = {}
    for(let el of arr){
        let temp = sum - el;
        if(map[temp]){
            if(pair[el] === undefined && pair[temp] === undefined){
                pair[el] = temp
            }
        }
        
    }
    return pair

}

console.log(pairSum([1, 2, 3, 4, 5, 4, 3, 2, 1], 6))


console.log(targetSum([1, 1, 2, 22, 3, 5, 11, 2], 5))