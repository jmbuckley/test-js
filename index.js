// console.log(6 === 4 + 2)
// console.log(6 === add(2,4))

function add(x, y){
    return x + y;
}
console.log(add(2, 4))

function subtract(x,y){
    return x - y;
}
console.log(subtract(4,2))

function multiply(x,y){
    return x * y;
}
console.log(multiply(4,2))
console.log(8 === multiply(4,2))

function divide(x,y){
    return x / y;
}
console.log(divide(4,2))
console.log(2 === divide(4,2))

function assert(expected, actual, message) {
    if(expected === actual){
        return true
    } else {
       console.log(message)
    }
}
assert(6,add(4,2),"you do maths")
assert(6,add(4,3),"you dont do maths")