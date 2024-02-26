const cart = [
    {product_name : "ิbag",price:1000},
    {product_name : "ิtextbook",price:900},
    {product_name : "ิcamera",price:8000}
]
const total_price = cart.reduce((value,e)=>e.price+value,0)

console.log(total_price)