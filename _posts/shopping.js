const products = {
    clothing: ["T-shirt", "Jeans", "Dress"],
    food: ["Bread", "Milk", "Eggs"],
    household: ["Soap", "Towel", "Dishwasher"]
};

function showProducts() {
    const categorySelect = document.getElementById("categorySelect");
    const selectedCategory = categorySelect.value;
    const productListDiv = document.getElementById("productList");
    const productList = products[selectedCategory];

    if (productList) {
        let html = "<h2>Available Products:</h2><ul>";
        productList.forEach(product => {
            html += `<li>${product}</li>`;
        });
        html += "</ul>";
        productListDiv.innerHTML = html;
    } else {
        productListDiv.innerHTML = "<p>No products available for this category.</p>";
    }
}

function placeOrder() {
    const orderStatusElement = document.getElementById("orderStatus");
    orderStatusElement.textContent = "Order placed. Estimated delivery: 3 days.";

    const pastOrdersList = document.getElementById("pastOrdersList");
    const newOrder = { id: pastOrdersList.childElementCount + 1, date: new Date().toISOString().split('T')[0], product: "New Product", status: "Processing" };
    const listItem = document.createElement("li");
    listItem.textContent = `${newOrder.date}: ${newOrder.product} (${newOrder.status})`;
    pastOrdersList.appendChild(listItem);

    localStorage.setItem("pastOrders", JSON.stringify(Array.from(pastOrdersList.children).map(item => item.textContent)));
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