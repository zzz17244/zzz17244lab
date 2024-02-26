// indexOf(data)  return index if not found return - 1
// find(data)      return data
// findIndex(data) return index if not found return - 1
const colors = ["red","green","blue","purple","white"]

const index = colors.indexOf("white")
console.log(index)
console.log("-------------------")
console.log(colors.find(item => item==="white"))
console.log("-------------------")
console.log(colors.findIndex(item => item==="white"))
