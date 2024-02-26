let aPerson = [
    {name :'john', age : 15},
    {name :'mary', age : 55},
    {name :'joy ', age : 75}
]

const result = aPerson.filter( o => {
   let birthdate = 2023 - o.age
   console.log(birthdate)
   return birthdate > 2000} 
   ) 
console.log(result)

