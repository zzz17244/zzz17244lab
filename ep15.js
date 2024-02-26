// array filter
const data = [
    {name:"chu srisittikum",salary:35000,department:"programmer"},
    {name:"joe srisittikum",salary:30000,department:"marketing"},
    {name:"nat srisittikum",salary:10000,department:"trainnee"},
    {name:"may srisittikum",salary:50000,department:"marketing"},
    {name:"joy srisittikum",salary:10000,department:"programmer"}

]

const result = data.filter(e=> e.salary>10000).filter(e=>e.department ==="marketing")
console.log(result)