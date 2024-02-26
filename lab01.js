let x = 10.0005
let result = x > 10 ? 9 : x*x
// console.log(result)
// using || as back up value
// let data     = "content1"
data = "chu"

let new_data  =  data || "default"

// console.log(new_data) 

let addnumber = (a,b)=> {return a + b};

console.log(addnumber(4,5))

let getemployes = function() {
    return{"id": 1,"name":"chuntronnn"}
}

console.log(getemployes())

let getemployess = () => {
    return{"id": 2,"name":"cbuntronnn"}
}

console.log(getemployess())


let getemployess1 = () => ({"id": 3,"name":"3cbuntronnn"})


console.log(getemployess1())


