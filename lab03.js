function map (arr, callback) {
    let output = []
    let result
    for (let i = 0; i < arr.length; i++) {
        result = callback(arr[i])
        output.push(result)
    }
    return output
}

let data = [10,20,30,40,50]
// const data3 = data.map(x=>x*4)
// console.log(data3)
const data2 = map(data , x => x*2)
debugger;
console.log(data2)



