//Check if a string is Isogram or not.

// --->Given a word or phrase, check if it is isogram or not. An Isogram is a word in which no letter occurs more than once.

const isIsogram = (str) => {
    let map = new Map();

    for(let elem of str){
        map.get(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1)
    }
    
    for(let elem of map){
        if(elem[1] > 1) return false;
        else return true;
    }
}

console.log(isIsogram("own"));