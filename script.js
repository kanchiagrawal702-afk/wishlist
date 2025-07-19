const form = document.getElementById("productForm");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

let products = JSON.parse(localStorage.getItem("wishlist")) || [];
let currentTheme = localStorage.getItem("theme") || "light";

// Apply saved theme
body.className = currentTheme;
updateThemeButton();

// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  updateThemeButton();
  localStorage.setItem("theme", body.className);
});

function updateThemeButton() {
  themeToggle.textContent = body.classList.contains("dark")
    ? "☀️ Switch to Light Mode"
    : "🌙 Switch to Dark Mode";
}

// Add new product
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const product = {
    name: form.name.value,
    price: form.price.value,
    store: form.store.value,
    link: form.link.value,
    image: form.image.value,
    notes: form.notes.value,
  };

  products.push(product);
  localStorage.setItem("wishlist", JSON.stringify(products));
  form.reset();
  alert("✅ Product added to your wishlist!");
});
// Show pastel popup
const popup = document.getElementById("successPopup");
popup.style.display = "block";
setTimeout(() => {
  popup.style.display = "none";
}, 3000);
