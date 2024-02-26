let aPerson = [
    {name :'john', age : 15},
    {name :'mary', age : 55},
    {name :'joy ', age : 75}
]

const totalAge = aPerson.reduce( (sum, x)=>sum + x.age  ,0)
console.log(`total age of my freind is ${totalAge}`)

//format function

const totalAge1 = aPerson.reduce( function (sum,x) {
    return sum + x.age + 1
} ,0)
console.log(`total age of my freind is ${totalAge1}`)

