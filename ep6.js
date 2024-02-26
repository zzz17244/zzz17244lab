// Rest Parameters
 
summation =(...numArray) => {
    let total = 0
    for (let number of  numArray) total +=number 
    return total
}
console.log(summation(100,299,300))