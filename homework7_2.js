const { Console } = require('console');
const fs = require('fs');
const jsonData = fs.readFileSync('covid-country.json', 'utf-8');

// Parse the JSON data into a JavaScript array
const dataArray = JSON.parse(jsonData);

const allCovidData = dataArray.reduce( (total,x) =>(total + x.todayRecovered) , 0)

console.log(`***Announcment***`)
console.log()
console.log (`1: Now ,Today World  recovers = ${allCovidData} people !`)
// const newArray2 = newArray.map
const lowCovidCountry = dataArray.filter(x => x.todayDeaths < 10 &&  x.population > 100000000).map(x=> x.country)
console.log()
console.log(`2: Here are the conuntry Death belowed 10 & Population more that 100 millions follow; 
${lowCovidCountry.join('  ')} , 

Note Total is ${lowCovidCountry.length} Countries  `)
console.log()
console.log(`***Reported by Homework7_2*** `)

