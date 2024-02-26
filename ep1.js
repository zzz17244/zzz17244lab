// block scope  VAR is global variable 
// constant is fix value can not be chnage 
// let can be chnage but used as local variable 



var x = 10
let  y = 50
if(x===10) {
    let  y = 500
    console.log("y inner = " + y)
}

console.log("y outer= " + y) 



