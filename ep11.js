// splice & slice
// splice postion to delelte  , number of item to be deleted ,new item to be replace 
// slice strated position , endpoistion - 1

const data = [10,20,30,40,50]
console.log(data)
console.log()
data.splice(1,3)
console.log(data)
console.log()
const data1 = [100,200,300,400,500]
console.log(data1)
console.log()
data1.splice(1,3,9999)
console.log(data1)
console.log("----------------------Slice")
const data4 = [10,20,30,40,50]
console.log(data4.slice(1,3))
console.log(data4)
const data5 = data4.slice(1,3)
console.log(data5)
console.log(`data 5 is ${data5}`)



