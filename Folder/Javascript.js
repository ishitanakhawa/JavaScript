const products = [
    {
        "id":1,
        "name": "Laptop",
        "price": 800,
    },
    {
        "id":2,
        "name": "mouse",
        "price": 499,
    }
] 
products.filter((product) => {product.price > 500});
collect(products).where("price", ">", 500);
console.log(collect(products).where("price", ">", 500));