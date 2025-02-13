document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Traditional Dress", category: "traditional", img: "https://source.unsplash.com/200x200/?saree" },
        { id: 2, name: "Party Gown", category: "partywear", img: "https://source.unsplash.com/200x200/?gown" },
        { id: 3, name: "Casual Wear", category: "casual", img: "https://source.unsplash.com/200x200/?casual" },
        { id: 4, name: "Western Dress", category: "western", img: "https://source.unsplash.com/200x200/?dress" }
    ];

    const productContainer = document.getElementById("productContainer");

    function displayProducts(filter) {
        productContainer.innerHTML = "";
        const filteredProducts = filter === "all" ? products : products.filter(p => p.category === filter);

        filteredProducts.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h2>${product.name}</h2>
                <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
                <button onclick="addToCart(${product.id})">🛒 Add to Cart</button>
            `;
            productContainer.appendChild(productElement);
        });
    }

    document.getElementById("filter").addEventListener("change", function () {
        displayProducts(this.value);
    });

    window.addToWishlist = function (id) {
        alert("Added to Wishlist: " + products.find(p => p.id === id).name);
    };

    window.addToCart = function (id) {
        alert("Added to Cart: " + products.find(p => p.id === id).name);
    };

    displayProducts("all");
});
