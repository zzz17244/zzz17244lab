let aPerson = [
    {name :'john', age : 15},
    {name :'mary', age : 55},
    {name :'joy ', age : 75}
]

const totalAge = aPerson.filter(x=> x.age <75).reduce((total,x)=> total+x.age,0)
console.log()
console.log(`total age is ${totalAge} years old `)