// pow(3, 5) = 3*power(3,4)
//           = 3*3*power(3,3)
//           = 3*3*3*power(3,2)
//           = 3*3*3**3*power(3,1)
//           = 3*3*3**3*3*power(3,0)

// 3*3*3*3*3

function power(b, exp){
    if( exp == 0 )  return 1
    return b * power(b, exp-1)
}
console.log(power(3, 3))  