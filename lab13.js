const myName = ["john","mary","joy"]

const allName = myName.reduce( ( total, x ) => total + "   " + x ,"")

console.log(allName)
console.log()
//format 2 
const myNames  = ["john","mary","joy"]
const allName2 = myNames.reduce( (totals , xx )=>{ return totals + "/" + xx}   ,"cd../")
console.log(allName2)