// defaul paramters
getDataCustomer = (customerName, customerAddress = "bangkok")=>{
address =`Customer Name: ${customerName} 
Location at: ${customerAddress}`
return address
}

console.log(getDataCustomer("Chutintorn Srisittikum" ))
console.log(getDataCustomer("chutintorn Srisittigum" , "chaimai"))