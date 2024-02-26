const newArr = [100,200,300]
const data   = [10,20,...newArr]
console.log(data)

const oldcolor   = ["red","blue","yellow"]
const allcolor   = ["orange","green","purple",...oldcolor]

console.log(allcolor)

const mycolor    =[...allcolor,...oldcolor]
console.log(mycolor)
console.log(mycolor.length)

//  add item ins array
const newcolor = ["gray","black"]

allcolor.push(...newcolor)
console.log('--------------------------------------------')
console.log(allcolor)