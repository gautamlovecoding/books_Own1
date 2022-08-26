// "hi to all"
//reserveSenWord() => split the senternce based on space => ["hi", "to", "all"]
// loop over the array and reverse each word using reverse function and keep concating next words

// function to reverse any word 

function reverse(str){
    // base case
    if(str.length === 0) return ""

    // recursive call
    return reverse(str.slice(1)) + str[0]
}

function revSentWords(sent){
    let words = sent.split(" ")
    for(let i = 0; i<words.length; i++){
        words[i] = reverse(words[i])
    }
    return words.join(" ")
}

console.log(revSentWords("hi to all"))