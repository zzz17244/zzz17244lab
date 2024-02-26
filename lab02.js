let array1 = [1,2,3,4,5]
const new_array = array1.map( x => x*2   )
console.log(new_array)
const new_array2 = array1.map( x => (x*3) )
console.log(new_array2)
const new_array3 = array1.map( x => { return x*4}  )
console.log(new_array3)
