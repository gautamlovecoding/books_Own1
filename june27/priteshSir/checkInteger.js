// TAKE A INPUT AND CHECK WHETHER THE INPUT IS AN INTEGER OR NOT

function checkInt(input) {

    let pattern = /[0-9]/g;
    let result = pattern.test(input);
    return result
}

console.log(checkInt(12.9))