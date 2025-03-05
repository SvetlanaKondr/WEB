function addToCart(name, price) {
    const cart = document.getElementById("cart");
    const item = document.createElement("li");
    item.textContent = name + " - " + price + "€";
    cart.appendChild(item);
}
