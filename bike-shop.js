const products = [
  {
    name: "Urban City Bike",
    category: "City",
    price: 499,
    description: "Ein leichtes Fahrrad für Alltag, Stadtverkehr und kurze Wege."
  },
  {
    name: "Mountain Trail 500",
    category: "Mountain",
    price: 899,
    description: "Robustes Mountainbike für Waldwege, Hügel und sportliche Fahrten."
  },
  {
    name: "E-Bike Comfort Plus",
    category: "E-Bike",
    price: 1899,
    description: "Komfortables E-Bike mit elektrischer Unterstützung für längere Strecken."
  },
  {
    name: "City Classic",
    category: "City",
    price: 579,
    description: "Klassisches Stadtrad mit bequemem Sattel und praktischer Ausstattung."
  },
  {
    name: "Mountain Pro X",
    category: "Mountain",
    price: 1199,
    description: "Sportliches Fahrrad für anspruchsvollere Strecken und Outdoor-Fahrten."
  },
  {
    name: "E-Bike Urban Move",
    category: "E-Bike",
    price: 2099,
    description: "Modernes E-Bike für tägliche Mobilität und komfortables Pendeln."
  }
];

const productList = document.querySelector("#productList");
const filterButtons = document.querySelectorAll(".filter-button");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");
const resetCart = document.querySelector("#resetCart");

let cart = [];

function renderProducts(category) {
  productList.innerHTML = "";

  let filteredProducts = products;

  if (category !== "all") {
    filteredProducts = products.filter(function(product) {
      return product.category === category;
    });
  }

  filteredProducts.forEach(function(product) {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="bike-icon">🚲</div>
      <h3>${product.name}</h3>
      <p class="product-category">${product.category}</p>
      <p>${product.description}</p>
      <p class="product-price">${product.price} €</p>
      <button class="button-small add-cart-button">In den Warenkorb</button>
    `;

    const addButton = productCard.querySelector(".add-cart-button");

    addButton.addEventListener("click", function() {
      addToCart(product);
    });

    productList.appendChild(productCard);
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const total = cart.reduce(function(sum, product) {
    return sum + product.price;
  }, 0);

  cartCount.textContent = cart.length;
  cartTotal.textContent = total + " €";
}

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    filterButtons.forEach(function(otherButton) {
      otherButton.classList.remove("active");
    });

    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    renderProducts(selectedCategory);
  });
});

resetCart.addEventListener("click", function() {
  cart = [];
  updateCart();
});

renderProducts("all");
updateCart();