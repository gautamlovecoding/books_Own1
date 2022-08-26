// TAKE A NUMBER AND IF NUMBER IS MULTIPLE OF 3 PRINT "Foo"
// IF NUMBER IS MULTIPLE OF 5 PRINT "Bar",
// IF NUMBER IS MULTIPLE OF 3 AND 5 BOTH PRINT "FooBar"


function multiple(n) {
    if(n%3 == 0 && n%5 == 0) return "FooBar"
    else if(n%5 == 0) return "Bar"
    else if(n%3 == 0) return "Foo"
    return "not Foo or Bar"
}

console.log(multiple(15))