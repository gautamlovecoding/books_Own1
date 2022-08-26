// if an array . find the elements withotout the pairs
// [11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 40, 4, 4, 40]  // here 3 and 7
// in object, of array
function withotoutPair(arr) {
    let map = new Map()

    for(let curr of arr) {

        // if curr element find in array
        if(map.get(curr)) {
            // increment freq count by 1
           map.set(curr, map.get(curr)+1)
        }
        else{
            map.set(curr, 1)
        }
    }
    //console.log(map)
    for(let val of map) {
        if(val[1]%2 == 1){
            console.log("without pair number is", val[0])
        }
    }
}

withotoutPair([11, 1, 7, 11, 1, 2, 2, 3, 3, 3, 40, 4, 4, 40])

// TC=> O(n)
// SC=> O(n)