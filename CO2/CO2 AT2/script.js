// Question 5: JavaScript event handling for a dynamic menu
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Question 2: add-to-cart click events update the cart count.
let cartCount = 0;
const cartCountLabel = document.getElementById("cartCount");
const cartMessage = document.getElementById("cartMessage");

document.querySelectorAll(".add-btn").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount += 1;
    cartCountLabel.textContent = String(cartCount);
    cartMessage.textContent = `Added to cart. Items in your cart: ${cartCount}.`;
    button.textContent = "Added ✓";
    window.setTimeout(() => { button.textContent = "Add to cart"; }, 900);
  });
});

// Question 5: demonstrate a simple JavaScript click event.
document.getElementById("demoButton").addEventListener("click", () => {
  document.getElementById("demoMessage").textContent =
    "Success! The click event was handled by JavaScript.";
});
