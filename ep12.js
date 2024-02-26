// loop in array
// for loop for each for of
const data = [10,20,30,40,50]
for ( let i = 0; i < data.length;i++){
    if(data[i] >=30) break
    console.log(`rank ${i+1}  value is ${data[i]}`)
}

let sum, rank  = 0
data.forEach(item=>{
    sum+=item
    console.log(`item value is ${item} : accumated is ${sum}`)
} );
// ///////////////////////////////////////////////////////////////
/// for of //////////////////////////////////////////////////////

for ( const items of data){
    rank+=1
    if(items ==30) continue
    console.log(`order ${rank}  member is  ${items}`)
}
