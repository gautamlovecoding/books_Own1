// print duplictes in an array
// using hash map 
// ex: [23, 3, 2, 3, 1, 5, 1]
// let frequencies = {
//     23: 1, h
//     3: 2,  e
//     2: 1,  l
//     1: 2,  l
//     5: 1   o
// }

function duplictes(arr){
    let frequencies = new Map()

    for(let i = 0; i<arr.length; i++) {

        if(frequencies.get(arr[i]) == undefined) frequencies.set(arr[i], 1)
        else frequencies.set(arr[i],   frequencies.get(arr[i])+1)
    
    }

    console.log(frequencies)

    let res = []

    for(let pairs of frequencies){
        if(pairs[1] > 1)  res.push(pairs[0])
    }

    return res

}

console.log(duplictes[23, 3, 2, 3, 1, 5, 1])



