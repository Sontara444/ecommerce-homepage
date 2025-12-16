// IMPORT ONLY FILES THAT EXIST IN assets/images

// Rings
import ring01 from "./ring-01.avif";
import ring02 from "./ring-02.avif";
import ring03 from "./ring-03.avif";
import ring04 from "./ring-04.avif";
import ring05 from "./ring-05.avif";
import ring06 from "./ring-06.avif";

// Pendants
import pendant01 from "./pendent-01.avif";
import pendant02 from "./pendent-02.avif";
import pendant03 from "./pendent-03.avif";
import pendant from "./pendent.avif";

// Bracelets & Bangles
import bracelet01 from "./bracelete-01.avif";
import bracelet02 from "./bracelete-02.avif";
import bangle01 from "./bangle-01.avif";

// Other images
import productRing from "./product-ring.jpg";
import leftHero from "./left-hero-image.avif";
import logoPng from "./logo.png";

// EXPORT ALL IMAGES
export const images = {
    ring01,
    ring02,
    ring03,
    ring04,
    ring05,
    ring06,

    pendant01,
    pendant02,
    pendant03,
    pendant,

    bracelet01,
    bracelet02,
    bangle01,

    productRing,
    leftHero,
    logoPng,
};



export const bestseller = [
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

export const recentlyViewed = [
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


export const shopByPrice = [
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
        image: ring02,
        link: "/shop?price=30000"
    },
    {
        id: 4,
        title: "E-Gift Cards",
        image: ring02,
        link: "/gift-cards"
    }
];


export const collections = [
    {
        id: 201,
        title: "Rings",
        image: "./assets/images/collection-rings.jpg",
        link: "/collections/rings"
    },
    {
        id: 202,
        title: "Earrings",
        image: "./assets/images/collection-earrings.jpg",
        link: "/collections/earrings"
    },
    {
        id: 203,
        title: "Pendants",
        image: "./assets/images/collection-pendants.jpg",
        link: "/collections/pendants"
    },
    {
        id: 204,
        title: "Bracelets",
        image: "./assets/images/collection-bracelets.jpg",
        link: "/collections/bracelets"
    },
    {
        id: 205,
        title: "Necklace",
        image: "./assets/images/collection-necklace.jpg",
        link: "/collections/necklace"
    },
    {
        id: 206,
        title: "Bangles",
        image: "./assets/images/collection-bangles.jpg",
        link: "/collections/bangles"
    },
    {
        id: 207,
        title: "Accessories",
        image: "./assets/images/collection-accessories.jpg",
        link: "/collections/accessories"
    }
];

export const giftMoments = [
    {
        id: 301,
        title: "Birthday",
        description:
            "Celebrate their special day with a timeless piece that shines as bright as they do.",
        image: "./assets/images/gift-birthday.jpg",
        buttonText: "Shop Birthday Gifts",
        link: "/gifts/birthday"
    },
    {
        id: 302,
        title: "Anniversary",
        description:
            "Mark your love story with jewellery that symbolizes everlasting connection and devotion.",
        image: "./assets/images/gift-anniversary.jpg",
        buttonText: "Shop Anniversary Gifts",
        link: "/gifts/anniversary"
    },
    {
        id: 303,
        title: "Engagement",
        description:
            "Begin forever with a piece that captures the promise of your beautiful journey ahead.",
        image: "./assets/images/gift-engagement.jpg",
        buttonText: "Shop Engagement Gifts",
        link: "/gifts/engagement"
    }
];

export const reviews = [
    {
        id: 401,
        image: "./assets/images/review-1.jpg",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 402,
        image: "./assets/images/review-2.jpg",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 403,
        image: "./assets/images/review-3.jpg",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    },
    {
        id: 404,
        image: "./assets/images/review-4.jpg",
        rating: 5,
        title: "So pretty!",
        text:
            "I recently ordered the ‘Golden Radiance Hoops’ from Kilangi, and I’m absolutely in love! The craftsmanship is stunning, and the shine is just perfect.",
        author: "Harshad Mehta"
    }
];

export const features = [
    {
        id: 501,
        text: "aliquam nunc pellentesque urna."
    },
    {
        id: 502,
        text: "aliquam nunc pellentesque urna."
    },
    {
        id: 503,
        text: "aliquam nunc pellentesque urna."
    }
];

