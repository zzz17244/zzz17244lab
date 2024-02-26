// spread operator + push
const newArr = [100,200,300]
const data   = [10,20,...newArr]
// using ... can unpack array into items in arry 
console.log(data)

const newColors = ["green","purple","organge"]
const allColor  = ["red","yellow","blue","black","white"]
allColor.push(...newColors)
console.log()
console.log(allColor)