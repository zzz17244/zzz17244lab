const fs = require('fs');
const jsonData = fs.readFileSync('homework1-4.json', 'utf-8');

// Parse the JSON data into a JavaScript array
const dataArray = JSON.parse(jsonData);

// Print the contents of the array
// console.log(dataArray);

// const newArray  = dataArray.filter(x=> x === "name" || x==="gender" || x==="company"|| x==="email" || x==="friends"|| x=== "balance")


// const newArray  = dataArray.filter(x=> x.name || x.gender || x.company || x.email || x.friends|| x.balance)
// const newArray  = dataArray.map(x=> ({ name : x.name , gender : x.gender,company:x.company,email:x.email
// ,friends: x.friends,balace : x.balance  }))

const newArray  = dataArray.map(x=> ({ name : x.name , gender : x.gender,company:x.company,email:x.email
    ,friends: x.friends,balance :  parseFloat( x.balance.substring(1).replace(',', ''))*0.09  }    )     )

console.log(newArray)
// const newArray2 = newArray.map

