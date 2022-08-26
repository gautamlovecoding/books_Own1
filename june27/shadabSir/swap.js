//Swap two number by using different variable.(Valid only for number)

/*******1st method(using temp variable)************/
// let a=2, b=3;
// let temp = a;
// a=b;
// b=temp
// console.log([a,b])

/*******2nd method(modern syntax)************/
//Es6 (After es6 its has came)
// let a=2, b=3;
// [a,b] = [b,a]
// console.log(a,b)

/*******3rd method(Without using other variable)************/
let a=2, b=3;
a = a+b //5 && b=3
b = a-b //5-3 = 2 && a=5
a = a-b //5-2 = 3
console.log(a, b)