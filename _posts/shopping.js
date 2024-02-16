const pastOrders = [
    {id: 1, date: "2024-02-15", product: "T-shirt", status: "Delivered"},
    {id: 2, date: "2024-02-14", product: "Shoes", status: "In transit"}
];

function displayPastOrders() {
    const pastOrdersList = document.getElementById("pastOrdersList");
    pastOrdersList.innerHTML = "";

    pastOrders.forEach(order => {
        const listItem = document.createElement("li");
        listItem.textContent = `${order.date}: ${order.product} (${order.status})`;
    });
}

function placeOrder() {
    const orderStatusElement = dpcument.getElementById("orderStatus");
    orderStatusElement.textContent = "Order placed. Estimated delivery: 3 days.";

    const newOrder = {id: pastOrders.length + 1, date: new Date().toISOString().split('T')[0], product: "New Product", status: "Processing"};
    pastOrders.push(newOrder);

    displayPastOrders();
}

displayPastOrders();