/**  1...
Input: accounts = [[1, 2, 3], [2, 3, 6], [4, 1, 5]]
Output: 11
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 2 + 3 + 6 = 11
3rd customer has wealth = 4 + 1 + 5 = 10

richest wealth = 11

*/

function calculateTotalSum(banks) {

    let totalAmount = 0;

    for(let balance of banks) {
        totalAmount += balance
    }

    return totalAmount
}

function calculateRichestPerson(accounts) {

    let maxAmount = -Infinity;

    for(let customer of accounts) {
        maxAmount = Math.max(calculateTotalSum(customer), maxAmount);
    }

    return maxAmount
}

console.log(calculateRichestPerson([[1, 2, 3], [2, 3, 6], [4, 1, 5]]))


// 2... There is an array of animals. the animals can be repeated. Give me the data that how many time each animal is repeated

function animalCount(animals) {
    let animalFreq = {}

    for(let animal of animals) {
        if(animalFreq[animal]) {
            animalFreq[animal] += 1;

        } else {
            animalFreq[animal] = 1
        }
    }

    console.log(animalFreq)
}

animalCount(["cat", "dog", "goat", "cat", "goat", "cat", "dog", "cat"])

// 3...  convert an array of numbers to array of string in such a way that if number was 1,2,3,4 then strings would have values like in 
// 1 : a in 2 : ab in 3 : abc e.g. [2, 5] => ["ab", "abcde"]

function generateString(number) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalStr = '', currIndex = 0;

    while(currIndex < number) {
        finalStr += alphabet[currIndex];
        currIndex++
    }

    return finalStr
}

// function encodeNumberWithCharacter(arr) {

//     for(let i = 0; i<arr.length; i++) {
//         arr[i] = generateString(arr[i])
//     }
// }

function encodeNumberWithCharacterOptimally(arr) {

    let maxNumber = Math.max(...arr);
    let encodeArray = [''];
    encodeArray.push('');
    for(let i = 1; i<maxNumber; i++) {
        encodeArray.push(generateString(i))
    }

    for(let i = 0; i<arr.length; i++) {
        arr[i] = generateString(arr[i])
    }
}


const temp = [2, 5, 3, 4, 5, 6]
encodeNumberWithCharacterOptimally(temp)
console.log(temp)