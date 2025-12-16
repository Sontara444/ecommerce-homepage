// IMAGES AS STRING PATHS
// Attaching to window to avoid ES Module CORS issues if running locally without a server

// Rings
const ring01 = "./assets/images/ring-01.avif";
const ring02 = "./assets/images/ring-02.avif";
const ring03 = "./assets/images/ring-03.avif";
const ring04 = "./assets/images/ring-04.avif";
const ring05 = "./assets/images/ring-05.avif";
const ring06 = "./assets/images/ring-06.avif";

// Pendants
const pendant01 = "./assets/images/pendent-01.avif";
const pendant02 = "./assets/images/pendent-02.avif";
const pendant03 = "./assets/images/pendent-03.avif";
const pendant = "./assets/images/pendent.avif";

// Bracelets & Bangles
const bracelet01 = "./assets/images/bracelete-01.avif";
const bracelet02 = "./assets/images/bracelete-02.avif";
const bangle01 = "./assets/images/bangle-01.avif";

// Other images
const productRing = "./assets/images/product-ring.jpg";
const leftHero = "./assets/images/left-hero-img.avif";
const logoPng = "./assets/images/logo.png";


// DATA ARRAYS attached to window
window.bestseller = [
    {
        id: 1,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904,
        originalPrice: 99904,
        colors: ["gold", "silver"]
    },
    {
        id: 2,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904,
        originalPrice: 99904,
        colors: ["gold"]
    },
    {
        id: 3,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904,
        originalPrice: 99904,
        colors: ["gold", "silver"]
    }
];

window.recentlyViewed = [
    {
        id: 101,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904,
        originalPrice: 99904
    },
    {
        id: 102,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904
    },
    {
        id: 103,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904,
        originalPrice: 99904
    },
    {
        id: 104,
        name: "Twisted Petal Gold Bracelet",
        image: ring01,
        price: 79904
    }
];


window.shopByPrice = [
    {
        id: 1,
        title: "Shop Under ₹10000",
        image: ring02,
        link: "/shop?price=10000"
    },
    {
        id: 2,
        title: "Shop Under ₹20000",
        image: ring02,
        link: "/shop?price=20000"
    },
    {
        id: 3,
        title: "Shop Under ₹30000",
        image: ring03,
        link: "/shop?price=30000"
    },
    {
        id: 4,
        title: "Shop Under ₹40000",
        image: ring04,
        link: "/shop?price=40000"
    }
];


window.collections = [
    {
        id: 201,
        title: "Rings",
        image: "./assets/images/ring-01.avif",
        link: "/collections/rings"
    },
    {
        id: 202,
        title: "Earrings",
        image: "./assets/images/ring-02.avif",
        link: "/collections/earrings"
    },
    {
        id: 203,
        title: "Pendants",
        image: "./assets/images/pendent-01.avif",
        link: "/collections/pendants"
    },
    {
        id: 204,
        title: "Bracelets",
        image: "./assets/images/bracelate-01.avif",
        link: "/collections/bracelets"
    },
    {
        id: 205,
        title: "Necklace",
        image: "./assets/images/pendent-03.avif",
        link: "/collections/necklace"
    },
    {
        id: 206,
        title: "Bangles",
        image: "./assets/images/bangle-01.avif",
        link: "/collections/bangles"
    },
    {
        id: 207,
        title: "Accessories",
        image: "./assets/images/ring-05.avif",
        link: "/collections/accessories"
    }
];

window.giftMoments = [
    {
        id: 301,
        title: "Birthday",
        description:
            "Celebrate their special day with a timeless piece that shines as bright as they do.",
        image: "./assets/images/pendent-01.avif",
        buttonText: "Shop Birthday Gifts",
        link: "/gifts/birthday"
    },
    {
        id: 302,
        title: "Anniversary",
        description:
            "Mark your love story with jewellery that symbolizes everlasting connection and devotion.",
        image: "./assets/images/ring-01.avif",
        buttonText: "Shop Anniversary Gifts",
        link: "/gifts/anniversary"
    },
    {
        id: 303,
        title: "Engagement",
        description:
            "Begin forever with a piece that captures the promise of your beautiful journey ahead.",
        image: "./assets/images/ring-05.avif",
        buttonText: "Shop Engagement Gifts",
        link: "/gifts/engagement"
    }
];

window.reviews = [
    {
        id: 401,
        image: "./assets/images/ring-01.avif",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 402,
        image: "./assets/images/ring-02.avif",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 403,
        image: "./assets/images/pendent-01.avif",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 404,
        image: "./assets/images/bracelate-01.avif",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    }
];

window.features = [
    {
        id: 501,
        icon: `<svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>`,
        text: "Anti - Fade Polish"
    },
    {
        id: 502,
        icon: `<svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>`,
        text: "Timeless Design"
    },
    {
        id: 503,
        icon: `<svg class="feature-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>`,
        text: "Lightweight Comfort"
    },
    {
        id: 504,
        text: "Modern Minimal"
    }
];
