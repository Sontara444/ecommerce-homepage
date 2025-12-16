
// Accessing data from window object (assuming assets/index.js is loaded first)
const bestseller = window.bestseller || [];
const recentlyViewed = window.recentlyViewed || [];
const shopByPrice = window.shopByPrice || [];
const features = window.features || [];
const collections = window.collections || [];


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

function createGiftCard(item) {
  return `
      <div class="gift-card">
          <img src="${item.image}" alt="${item.title}">
          <button class="shop-under-btn">${item.title}</button>
      </div>
  `;
}

function createFeatureItem(item) {
  return `
      <div class="feature-item">
          <span class="feature-text">${item.text}</span>
          ${item.icon ? item.icon : ''}
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

// ===============================
// RENDER GIFT NOTES (SHOP BY PRICE)
// ===============================
const giftRightContainer = document.querySelector(".gift-right");

if (giftRightContainer) {
  giftRightContainer.innerHTML = shopByPrice
    .map(createGiftCard)
    .join("");
}

// ===============================
// RENDER FEATURES
// ===============================
const featuresBanner = document.querySelector(".features-banner");

if (featuresBanner) {
  featuresBanner.innerHTML = features
    .map(createFeatureItem)
    .join("");
}

// ===============================
// RENDER COLLECTIONS
// ===============================
const collectionsGrid = document.querySelector(".collections-grid");


function createCollectionItem(item) {
  return `
      <div class="collection-item">
          <img src="${item.image}" alt="${item.title}">
          <a href="${item.link}" class="collection-title">${item.title}</a>
      </div>
  `;
}

if (collectionsGrid) {
  collectionsGrid.innerHTML = collections
    .map(createCollectionItem)
    .join("");
}

// ===============================
// RENDER GIFT MOMENTS
// ===============================
const momentsGrid = document.querySelector(".moments-grid");
const giftMoments = window.giftMoments || [];

function createMomentCard(moment) {
  return `
      <div class="moment-card">
          <div class="moment-image">
              <img src="${moment.image}" alt="${moment.title}">
          </div>
          <h3>${moment.title}</h3>
          <p>${moment.description}</p>
          <a href="${moment.link}" class="moment-btn">
              ${moment.buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
      </div>
  `;
}

if (momentsGrid) {
  momentsGrid.innerHTML = giftMoments
    .map(createMomentCard)
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Shared Helper Functions
  // ... (rest of the file content)

  // ===============================
  // GLOBAL DATA ACCESS 
  // ===============================
  // (We access window.bestseller, window.reviews etc. directly inside render functions or here)

  // ... (Previous logic for other sections) ...

  // ===============================
  // RENDER REVIEWS
  // ===============================
  const reviewsGrid = document.querySelector(".reviews-grid");
  const reviews = window.reviews || [];

  function createReviewCard(review) {
    // Generate 5 stars
    const stars = "★".repeat(review.rating);

    return `
            <div class="review-card">
                <div class="review-image">
                    <img src="${review.image}" alt="Review by ${review.author}">
                </div>
                <div class="review-content">
                    <div class="stars">${stars}</div>
                    <h3>"${review.title}"</h3>
                    <p>${review.text}</p>
                    <span class="author">~ ${review.author}</span>
                </div>
            </div>
        `;
  }

  if (reviewsGrid) {
    reviewsGrid.innerHTML = reviews.map(createReviewCard).join("");
  }
});
