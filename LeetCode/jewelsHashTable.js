var numJewelsInStones = function(jewels, stones) {
    let map = {}
    let output =0;
    
    for(let i=0; i<stones.length; i++){
        if(map.hasOwnProperty(stones[i])){
            map[stones[i]] +=1
        }else{
            map[stones[i]] = 1
        }
       
    }
    
};

let res = numJewelsInStones("aA", "aabAAbb")
console.log(res)