// reduce function format 1
const myNumber = [10,20,30,40,50]
const result   = myNumber.reduce ((total, x) => (total+x )   ,0)
console.log(result)

// reduce function format 2

const result1   = myNumber.reduce ( (total,x) =>{ return total+x
},50)
console.log(result1)