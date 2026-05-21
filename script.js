// Select all buttons
const buttons = document.querySelectorAll(".game-card button");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        
        const gameCard = button.parentElement;

        const title = gameCard.querySelector("h3").innerText;
        const price = gameCard.querySelector("p").innerText;

        const image = gameCard.querySelector("img").src;

const game = {
    title: title,
    price: price,
    image: image
};

        // CHECK IF GAME ALREADY EXISTS
const existingGame = cart.find(item =>
    item.title === game.title
);

// IF ALREADY IN CART
if(existingGame){

    button.innerText = "Already in Cart";
    button.disabled = true;

    return;
}

// ADD GAME
cart.push(game);

// SAVE
localStorage.setItem(
    "cart",
    JSON.stringify(cart)
);

// SUCCESS MESSAGE
alert(title + " added to cart!");
    });
});

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartLinks = document.querySelectorAll('nav a[href="cart.html"]');
    
    cartLinks.forEach(link => {
        if (cart.length > 0) {
            link.innerHTML = `🛒 Cart <span class="cart-badge">${cart.length}</span>`;
        } else {
            link.innerHTML = `🛒 Cart`;
        }
    });
}
// Run it immediately on page load
document.addEventListener("DOMContentLoaded", updateCartBadge);
