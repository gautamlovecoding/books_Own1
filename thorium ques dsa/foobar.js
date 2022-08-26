//Number is divide 3 print "a" number is divide 4 print "b" number divide both 7 &5 print c?

function divide(num){
    if(num%3 === 0) return 'a';
    else if(num%4 === 0) return 'b';
    else if(num%7===0 && num%5===0) return 'c'
    else return 'not matched'

}
console.log(divide(11));

//Take a number and if is multiple 0f 3 print "Foo"
//                  if is multiple 0f 5 print "Bar"
//                  if is multiple 0f 5 and 7 both print "FooBar" else ptint "Nothing"

function printNum(number) {
    // if is multiple 0f 3 print "Foo"
    if(number%3 === 0){
        console.log("Foo")
    }
    // if is multiple 0f 5 print "Bar"
    else if(number%5 === 0 && number%7 !== 0){
        console.log("Bar")
    }
    //if is multiple 0f 5 and 7 both print "FooBar"
    else if(number%5===0 && number%7 === 0){
        console.log("FooBar")
    }else{
        console.log("Nothing")
    }
}

printNum(30) //=========>Foo
printNum(25) //=========>Bar
printNum(35) //=========>FooBar
printNum(11) //=========>Nothing