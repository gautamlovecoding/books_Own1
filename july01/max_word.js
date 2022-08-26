// sentence = ["", "", ""]
// maximum word in a sentence

function maxWord(sentence) {
    let max = 0;

    for(let currSentence of sentence) {
        let currWordCount = currSentence.split(' ').length
        if(currWordCount > max) {
            max = currWordCount
        }
    }
    return max
}

console.log(maxWord(["alice and bob like leetcode", "i think so too", "this is great thanks very much"]))