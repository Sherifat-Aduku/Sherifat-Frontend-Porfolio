
// Inventory Management System
// Create an empty array called Inventory
 
let inventory = []
function addProduct(id, name, price, quantity) {
  let existingProduct = inventory.find(product => product.id === id);
 
if(existingProduct){
  existingProduct.quantity += quantity;
  console.log("update product stock")
}else{
  let product = {
    id:id,
    name:name,
    price:price,
    quantity: quantity,
  }
  inventory.push(product);
};
 
 
console.log(inventory)
}

// Add products
addProduct(1, "Biscuit", 20, 6);
addProduct(2, "Bread", 40, 8);
addProduct(3, "Candy", 60, 10);
addProduct(4, "Pampers", 500, 12);
addProduct(5, "Butter", 200, 10);
addProduct(6, "Milk", 30, 18);
addProduct(7, "Sugar", 5, 15);
addProduct(8, "Toys", 10, 30);
addProduct(9, "Chocolate", 50, 10);
addProduct(10, "Juice", 300, 15);
addProduct(11, "Toys", 100, 2);
addProduct(12, "Perfume", 500, 10)
addProduct(13, "Tissue Paper", 300, 11);
addProduct(14, "Noodles", 250, 2);
addProduct(15, "Detergent", 200, 15);


// Remove products

function removeProduct(id) {
    const productToRemove = inventory.find(product => product.id === id);
    if (!productToRemove) {
        console.log("Product not found");
        return;
}
 
  //inventory = inventory.filter(product => product.id !== id);
 
  inventory = inventory.filter((product) => (product.id !== id))        
 
 
 
  console.log(`${productToRemove.name} removed from inventory`);
 
}
 
removeProduct(3)
 
console.log(inventory)
 

 
// function updatestock
 
function updateStockIncrease(id, quantityAdded) {
 
for (let i = 0; i < inventory.length; i++) {
 
if (inventory[i].id === id) {
 
inventory[i].quantity += quantityAdded
 
inventory[i].quantity < 10
  ? console.log("Lowstock")
  : console.log(`Updated quantity of ${inventory[i].name} is ${inventory[i].quantity}`);
}
 
else{
    console.log("Invalid id")
}
}
}
updateStockIncrease(7, 3);
updateStockIncrease(11, 2);
 
console.log(inventory)
 
function updateStockDecrease(id, quantityRemoved) {
 
    for (let i = 0; i < inventory.length; i++) {
 
if (inventory[i].id === id) {
 
inventory[i].quantity -= quantityRemoved
 
inventory[i].quantity < 10
  ? console.log(inventory[i].name + " :Lowstock")
  : console.log(`Updated quantity of ${inventory[i].name} is ${inventory[i].quantity}`);
}
}
}
 
updateStockDecrease(4, 4);
console.log(inventory)
 
// Generate Report: A function to show a summary of the inventory, including the total number of products, their value, and a list of low-stock items.
function generateReport(){}
console.log(inventory.length)
// function totalValue(){
    let totalCost = 0
    for (let i = 0; i < inventory.length; i++) {
         let price = inventory[i].price;
         let quantity = inventory[i].quantity;
        //  let sum = price * quantity;  
          totalCost += price * quantity;;
    }
    console.log(totalCost);
 
// }
// totalValue()
function printLowStock(){
  let lowstockItems = inventory.filter(
    function(product){
         return product.quantity < 10
        //  ?console.log(`${product.name}`)
        //  :console.log(false)
        //  console.log(`${product.name} is ${product.quantity}`)
    })
    lowstockItems.forEach(function(product) {
    console.log(`${product.name} is low in stock: ${product.quantity}`);
    console.log("The list of items in the inventory: ");
    inventory.forEach((product, index) => {
  console.log (`${index + 1}. ${product.name}`);
});
});
}
 
 
printLowStock()
function generateReport(){
    let report = `Total Quantity of products is ${inventory.length}`
    console.log(report)
}
 
console.log("The total cost of all products in the inventory is NGN" + totalCost)
 
generateReport()
console.log(inventory.length)
console.log(totalCost);
