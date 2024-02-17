const products = {
    clothing: [
        { name: "T-shirt", price: 10 },
        { name: "Jeans", price: 20 },
        { name: "Dress", price: 30 }
    ],
    food: [
        { name: "Bread", price: 2 },
        { name: "Milk", price: 3 },
        { name: "Eggs", price: 4 }
    ],
    household: [
        { name: "Soap", price: 5 },
        { name: "Towel", price: 8 },
        { name: "Dishwasher", price: 500 }
    ]
};

let selectedCategory = null;
let selectedProducts = [];

function showProducts() {
    const categorySelect = document.getElementById("categorySelect");
    selectedCategory = categorySelect.value;
    const productListDiv = document.getElementById("productList");
    const productList = products[selectedCategory];

    if (productList) {
        let html = "<h2>Available Products:</h2><ul>";
        productList.forEach(product => {
            html += `<li><input type="checkbox" value="${product.name}" onchange="toggleProduct(this)">${product.name} - $${product.price}</li>`;
        });
        html += "</ul>";
        productListDiv.innerHTML = html;
    } else {
        productListDiv.innerHTML = "<p>No products available for this category.</p>";
    }
}

function toggleProduct(checkbox) {
    const productName = checkbox.value;
    const product = products[selectedCategory].find(item => item.name === productName);
    if (checkbox.checked) {
        selectedProducts.push(product);
    } else {
        selectedProducts = selectedProducts.filter(item => item.name !== productName);
    }
}

function placeOrder() {
    if (!selectedCategory || selectedProducts.length === 0) {
        alert("Please select a category and at least one product before placing an order.");
        return;
    }

    const orderStatusElement = document.getElementById("orderStatus");
    orderStatusElement.textContent = "Order placed. Estimated delivery: 3 days.";

    const pastOrdersList = document.getElementById("pastOrdersList");
    selectedProducts.forEach(product => {
        const newOrder = { id: pastOrdersList.childElementCount + 1, date: new Date().toISOString().split('T')[0], product: product.name, price: product.price, status: "Processing" };
        const listItem = document.createElement("li");
        listItem.textContent = `${newOrder.date}: ${newOrder.product} - $${newOrder.price} (${newOrder.status})`;
        pastOrdersList.appendChild(listItem);
    });

    localStorage.setItem("pastOrders", JSON.stringify(Array.from(pastOrdersList.children).map(item => item.textContent)));

    selectedProducts = [];
}

function resetOrders() {
    localStorage.removeItem("pastOrders");
}

function displayPastOrders() {
    const pastOrdersList = document.getElementById("pastOrdersList");
    const storedOrders = JSON.parse(localStorage.getItem("pastOrders"));

    if (storedOrders) {
        storedOrders.forEach(order => {
            const listItem = document.createElement("li");
            listItem.textContent = order;
            pastOrdersList.appendChild(listItem);
        });
    }
}

window.onload = function() {
    displayPastOrders();
    resetOrders();
};