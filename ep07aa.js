// Destructuring object
// Create object myProduct
const myProduct = {
    productName: "Computer Desktop",
    price: 30000,
    stock: 12
};

// Destructuring assignment without redeclaring variables
const { productName:n, price:p, stock:s } = myProduct;

console.log(n,s,p);



