let aPerson = [
    {name :'john', age : 25},
    {name :'mary', age : 35},
    {name :'joy ', age : 45}
]

const  map3 = aPerson.filter( function(obj) {
    let birthdate = 2023 - obj.age
    console.log(` name ${obj.name} born ${obj.age}`)
return  birthdate > 2010
})