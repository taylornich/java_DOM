// Question 1 Task 1

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

//Question 1 Task 2
function displayProducts() {
    let productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> ${product.description}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

//Question 1 Task 3

window.onload = displayProducts;