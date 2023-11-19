const trendingProducts = [
    {
        id: 1,
        quantity: 1,
        name: 'Yến Hảo Hạng 1',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],
    },
    {
        id: 2,
        quantity: 1,
        name: 'Yến Hảo Hạng 2',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],
    },
    {
        id: 3,
        quantity: 1,
        name: 'Yến Hảo Hạng 3',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 4,
        quantity: 1,
        name: 'Yến Hảo Hạng 4',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 5,
        quantity: 1,
        name: 'Yến Hảo Hạng 5',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 6,
        quantity: 1,
        name: 'Yến Hảo Hạng 6',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 7,
        quantity: 1,
        name: 'Yến Hảo Hạng 7',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 8,
        quantity: 1,
        name: 'Yến Hảo Hạng 8',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 9,
        quantity: 1,
        name: 'Yến Hảo Hạng 9',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 10,
        quantity: 1,
        name: 'Yến Hảo Hạng 10',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 11,
        quantity: 1,
        name: 'Yến Hảo Hạng 11',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 12,
        quantity: 1,
        name: 'Yến Hảo Hạng 12',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 13,
        quantity: 1,
        name: 'Yến Hảo Hạng 13',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 14,
        quantity: 1,
        name: 'Yến Hảo Hạng 14',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 15,
        quantity: 1,
        name: 'Yến Hảo Hạng 15',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 16,
        quantity: 1,
        name: 'Yến Hảo Hạng 16',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 17,
        quantity: 1,
        name: 'Yến Hảo Hạng 17',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 18,
        quantity: 1,
        name: 'Yến Hảo Hạng 18',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 19,
        quantity: 1,
        name: 'Yến Hảo Hạng 19',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
    {
        id: 20,
        quantity: 1,
        name: 'Yến Hảo Hạng 20',
        price: 4300000,
        discount: 20,
        originalPrice: 5160000,
        images: [
            { id: 1, url: './assets/img/sanpham1.png', }
        ],

    },
];

const bestSellingProducts = [];

const cart = [];

const users = [
    {
        id: 1,
        quantity: 1,
        fullName: 'Admin',
        role: 'Admin',
    },
];

// ** Storage keys definition
const CART_KEY = 'cart';
const TRENDING_PRODUCTS_KEY = 'trendingProducts';
const BEST_SELLING_PRODUCTS_KEY = 'bestSellingProducts';

const storage = localStorage;

// ** Convert trendingProducts array to string to save to localStorage
const stringTrendingProducts = JSON.stringify(trendingProducts);
storage.setItem(TRENDING_PRODUCTS_KEY, stringTrendingProducts);

// ** Convert cart array to string to save to localStorage
// const stringCart = JSON.stringify(cart);
// storage.setItem(CART_KEY, stringCart);
