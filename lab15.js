const myName = ["john","mary","joy"]

const  numChar = myName.reduce((sum,x)=> sum+ x.length ,0)

console.log(` total number of characters is  ${numChar}`)