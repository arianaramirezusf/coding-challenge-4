//Creating Array of Objects
let products = [
    {name: "Airfryer", category: "Household", price: 35.99, inventory: 15},
    {name: "Headphones", category: "Electronics", price: 32.99, inventory: 20},
    {name: "Sweater", category: "Apparel", price: 25.99, inventory: 30},
    {name: "Cereal", category: "Groceries", price: 5.99, inventory: 25},
    {name: "Crackers", category: "Groceries", price: 4.99, inventory: 10},
]

console.log(products);

for (const product of products) {
    
    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "household":
            discount = 0.10;
            break;
        case "groceries":
            discount = 0.10;
            break;
        default:
            discount = 0;
            let discountedPrice = product.price * (1 - discount);
            console.log(`The discounted price of ${product.name} is $${discountedPrice}`);
            continue;
    }
    }
    
//Creating Customer Type Variable
    let customerType = ("regular", "student", "senior");
    if (customerType == "student") {
        discount += 0.05;
    } else if (customerType == "senior") {
        discount += 0.07;
    }
    
    




