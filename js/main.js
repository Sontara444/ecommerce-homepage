
import {
    bestseller,
    recentlyViewed
} from "../assets/index.js";


function createProductCard(product) {
    return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>

        <p class="price">
          <span class="current-price">₹${product.price}</span>
          ${product.originalPrice
            ? `<span class="original-price">₹${product.originalPrice}</span>`
            : ""
        }
        </p>

        <div class="colors">
          ${product.colors
            ? product.colors
                .map(color => `<span class="color-circle ${color}"></span>`)
                .join("")
            : ""
        }
        </div>
      </div>
    </div>
  `;
}


// ===============================
// RENDER BEST SELLER PRODUCTS
// ===============================
const productGrid = document.querySelector(".product-grid");

if (productGrid) {
    productGrid.innerHTML = bestseller
        .map(createProductCard)
        .join("");
}


// ===============================
// RENDER RECENTLY VIEWED PRODUCTS
// ===============================
const recentGrid = document.querySelector(".recent-grid");

if (recentGrid) {
    recentGrid.innerHTML = recentlyViewed
        .map(createProductCard)
        .join("");
}
