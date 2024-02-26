let aPerson = [
    {name :'john', age : 25},
    {name :'mary', age : 35},
    {name :'joy ', age : 45}
]

const printName  = aPerson.map( x => 'My name is ' + x.name + 'age is ' + x.age)
console.log(printName)
