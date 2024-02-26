//  default parameters
getCustomerData = (customer_name ,customer_address ="bangkok")=>{

    const address = 
    `Customer name : ${customer_name} / Home address :${customer_address}`
    return address
}

console.log(getCustomerData("chutntorn srisittikum","chiengmai "))
console.log(getCustomerData("patima"))
console.log()
