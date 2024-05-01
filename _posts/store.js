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

productList.array.forEach(element => {
    <input type="checkboxes" id="category" value="${product name}" ></input> 
    html += "</ul";
    productListDiv.innerHTML=html;

});

function toggleProduct(checkbox,price){
const productName = checkbox.value;
if (checkbox.checked){
    selectedProducts.push ({name:productName, price: price});
} else{
    selectedProducts=selectedProducts.filter(item => item.name !==productName)
}
}



