const { Console } = require('console');
const fs = require('fs');
const jsonData = fs.readFileSync('covid-country.json', 'utf-8');

// Parse the JSON data into a JavaScript array
const dataArray = JSON.parse(jsonData);

const allCovidData = dataArray.reduce( (total,x) =>(total + x.todayRecovered) , 0)


console.log (` World today recovers = ${allCovidData} people !`)
// const newArray2 = newArray.map

const lowCovidCountry = dataArray.filter(x => x.todayDeath < 10 & x.population > 10000000)

console.log(lowCovidCountry)

