// Inventory Management System
// Using initial human format and variable names

let inventory = []

function addProduct(id, name, price, quantity) {
    let existingProduct = inventory.find(product => product.id == id);

    if(existingProduct){
        existingProduct.quantity += quantity;
        console.log("Updated product stock");
    } else {
        let product = { id, name, price, quantity };
        inventory.push(product);
    }

    updateTable();
    updateLowStock();
    updateTotalCost();
}

// Remove product by ID
function removeProduct(id){
    const productToRemove = inventory.find(product => product.id == id);
    if (!productToRemove) return;

    inventory = inventory.filter(product => product.id != id);
    console.log(`${productToRemove.name} removed from inventory`);
    updateTable();
    updateLowStock();
    updateTotalCost();
}

// Update stock increase
function updateStockIncrease(id, quantityAdded){
    let product = inventory.find(p => p.id == id);
    if(product){
        product.quantity += quantityAdded;
        console.log(`Updated quantity of ${product.name} is ${product.quantity}`);
    }
    updateTable();
    updateLowStock();
    updateTotalCost();
}

// Update stock decrease
function updateStockDecrease(id, quantityRemoved){
    let product = inventory.find(p => p.id == id);
    if(product){
        product.quantity -= quantityRemoved;
        console.log(`Updated quantity of ${product.name} is ${product.quantity}`);
    }
    updateTable();
    updateLowStock();
    updateTotalCost();
}

// Display inventory in table
function updateTable(){
    const tbody = document.querySelector('#inventoryTable tbody');
    tbody.innerHTML = '';

    inventory.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td>
                <button onclick="removeProduct(${product.id})">Remove</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

// Show low stock
function updateLowStock(){
    const lowStock = inventory.filter(product => product.quantity < 10);
    const msg = document.getElementById('lowStockMessage');

    if(lowStock.length > 0){
        msg.textContent = "Low stock items: " + lowStock.map(p => `${p.name} (${p.quantity})`).join(', ');
    } else {
        msg.textContent = "";
    }
}

// Show total cost
function updateTotalCost(){
    const total = inventory.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    document.getElementById('totalCostMessage').textContent = `Total inventory value: NGN ${total}`;
}

// Handle form submission
const form = document.getElementById('productForm');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const id = parseInt(document.getElementById('id').value);
    const name = document.getElementById('name').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if(!id || !name || !price || !quantity) return;

    addProduct(id, name, price, quantity);
    form.reset();
});
