// Arrat reduce
const data = [10,20,30,40]
// array.reduce( (value,e)=>{},start_value )

const summation = data.reduce((value,e)=>{
    const total = e+value
    return total
},0)

console.log(summation)