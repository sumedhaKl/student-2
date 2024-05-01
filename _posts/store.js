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
        { name: "Dishwasher", price: 50 }
    ]
};

let selectedProducts = []

function showProducts () { 
const categorySelect=document.getElementById(categorySelect);
selectedCategory=categorySelect.value
const productListDiv=document.getElementById(productListDiv);
selectedProducts=productSelect.value;
}

if (productList){
    let html = "<h2>Available Products:</h2><ul>";
    productList.array.forEach(element => { 
     `<li><input type="checkboxes" id="category" value="${product.name}"onchange="toggleProduct(this, ${product.price})">${product.name} - $${product.price}</li>`;
    });  
    html += "</ul";
    productListDiv.innerHTML=html;
} else {
    productListDiv.innerHTML=<p>No products available for this category.</p>
}

function toggleProduct(checkbox,price){
const productName = checkbox.value;
    if (checkbox.checked){
        selectedProducts.push ({name:productName, price: price});
    } else{
        selectedProducts=selectedProducts.filter(item => item.name !==productName)
    }
}

function placeOrder(){
    if (selectedProducts.length==0) {
        alert("Please select a category and a product before placing order.")
        return;
    }

    const orderStatusElement = document.getElementById("order Status");
    orderStatusElement.textContent "Order placed. Estimated delivery:3 days.";

    const pastOrdersList = document.getElementById("pastOrderList");
    

}

