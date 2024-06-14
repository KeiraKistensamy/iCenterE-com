let wrapper = document.querySelector("[products]");
let products = JSON.parse(localStorage.getItem("products")) ?
    JSON.parse(localStorage.getItem("products")) :
    localStorage.setItem(
        "products",
        JSON.stringify([{
            id: 1,
            productName: "iPhone X",
            category: "iPhones",
            description: "The sides of the phone are composed of surgical-grade stainless steel to improve durability, and the front and back are made of glass. The design is intended to be IP67 water and dust resistant.",
            amount: 4999.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneX.jpg",
        },
        {
            id: 2,
            productName: "iPhone XR",
            category: "iPhones",
            description: "The iPhone XR features a 6.1-inch Liquid Retina display, A12 Bionic chip for fast performance, and a 12MP rear camera with advanced portrait mode capabilities. It offers Face ID, supports wireless charging, and comes in a variety of vibrant colors.",
            amount: 5499.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneXr.jpg",
        },
        {
            id: 3,
            productName: "iPhone XS",
            category: "iPhones",
            description: "The iPhone XS features a 5.8-inch Super Retina OLED display, Apple`s A12 Bionic chip, and dual 12 MP rear cameras. It offers advanced Face ID, supports wireless charging, and is water and dust resistant.",
            amount: 5999.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneXs.jpg",
        },
        {
            id: 4,
            productName: "iPhone 11",
            category: "iPhones",
            description: "The iPhone 11 features a 6.1-inch Liquid Retina display, dual-camera system with Ultra Wide and Night mode, A13 Bionic chip, and improved battery life, offering high performance and advanced photography capabilities in a sleek design.",
            amount: 10999.0,
            img_url: "",
        },
        {
            id: 5,
            productName: "iPhone 11 Pro",
            category: "iPhones",
            description: "The iPhone 11 Pro features a 5.8-inch Super Retina XDR display, triple-camera system (ultra-wide, wide, and telephoto), A13 Bionic chip, and offers improved battery life and water resistance. It boasts a sleek design with a durable glass back and stainless steel frame.",
            amount: 12999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone11Pro2.jpg",
        },
        {
            id: 6,
            productName: "iPhone 12",
            category: "iPhones",
            description: "The iPhone 12 features a 6.1-inch Super Retina XDR display, A14 Bionic chip, dual-camera system with 12MP ultra-wide and wide lenses, 5G capability, and a Ceramic Shield front cover for improved durability.",
            amount: 12999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone12.jpg",
        },
        {
            id: 7,
            productName: "iPhone 12 Pro",
            category: "iPhones",
            description: "The iPhone 12 Pro also has a 6.1-inch Super Retina XDR display and A14 Bionic chip, but adds a triple-camera system with an additional telephoto lens, LiDAR scanner for enhanced AR experiences, and a more premium stainless steel design. It also supports ProRAW photography and offers more storage options.",
            amount: 14999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone12Pro.jpg",
        },
        {
            id: 8,
            productName: "iPhone 13",
            category: "iPhones",
            description: "A powerful smartphone with a 6.1-inch Super Retina XDR display, A15 Bionic chip, dual-camera system, and improved battery life, offering excellent performance and camera capabilities.",
            amount: 13999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone13.jpg",
        },
        {
            id: 9,
            productName: "iPhone 13 Pro Max",
            category: "iPhones",
            description: "The premium model of the iPhone 13 series, featuring a 6.7-inch Super Retina XDR display with ProMotion, A15 Bionic chip, advanced triple-camera system, and exceptional battery life, designed for professional-grade photography and performance.",
            amount: 15999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone13ProMax.jpg",
        },
        {
            id: 10,
            productName: "iPhone 14",
            category: "iPhones",
            description: "An advanced iteration with a 6.1-inch Super Retina XDR display, improved A16 Bionic chip, enhanced dual-camera system, and new features such as satellite connectivity for emergency situations, providing a balance of performance and new functionalities.",
            amount: 17999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone14.2.jpg",
        },
        {
            id: 11,
            productName: "iPhone 15",
            category: "iPhones",
            description: "The latest model boasting a 6.1-inch Super Retina XDR display, A17 Bionic chip, upgraded camera system with enhanced AI capabilities, and USB-C charging, introducing the latest technology and features for a superior user experience.",
            amount: 18999.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhone15.webp",
        },
        {
            id: 12,
            productName: "iPhone Clear Cases",
            category: "Phone Cases",
            description: "Thin, light, and easy to grip — this Apple-designed case shows off the brilliant colored finish ogf your phone while providing extra protection. Crafted with a blend of optically clear polycarbonate and flexible materials, the case fits right over the buttons for easy use.",
            amount: 450.0,
            img_url: "https://keirakistensamy.github.io/allimages/images/clearCases.jpg",
        },
        {
            id: 13,
            productName: "iPhone Design Cases",
            category: "Phone Cases",
            description: "Customized Long-Term Durability Case. Unlike soft cases, hard cases resist stretching or deforming over time, maintaining their shape and fit for the life of your phone.",
            amount: 899.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneDesignCase.png",
        },
        {
            id: 14,
            productName: "iPhone Solid Silicone Cases",
            category: "Phone Cases",
            description: "Designed by Apple to complement your iPhone, the Silicone Case with MagSafe is a delightful way to protect your iPhone. The silky, soft-touch finish of the silicone exterior feels great in your hand. And on the inside, there`s a soft microfibre lining for even more protection.",
            amount: 799.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/solidCases.jpg",
        },
        {
            id: 15,
            productName: "Apple Lightning Cable TypeC to iPhone",
            category: "Charger",
            description: "Apple Lightning Cable TypeC to iPhone",
            amount: 799.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneCtoi.jpg",
        },
        {
            id: 16,
            productName: "Apple Lightning Cable USB to iPhone",
            category: "Charger",
            description: "Apple Lightning Cable USB to iPhone",
            amount: 799.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneCaseUsbtoi.jpg",
        },
        {
            id: 17,
            productName: "Apple Lightning Magnetic Charger",
            category: "Charger",
            description: "Apple Lightning Magnetic Charger",
            amount: 999.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/magneticCharger.jpg",
        },
        {
            id: 18,
            productName: "iPhone Fast-Charging Block",
            category: "Charger",
            description: "Apple 20W USB-C Power Adapter",
            amount: 499.99,
            img_url: "https://keirakistensamy.github.io/allimages/images/iPhoneChargingBlock.webp",
        },
    ])
);

// Current year
document.querySelector("[currentYear]").textContent =
    new Date().getUTCFullYear();

function renderProducts(productsToRender) {
    wrapper.innerHTML = '';
    productsToRender.forEach((product) => {
        wrapper.innerHTML += `
        <div class="card">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">R ${product.amount}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <button class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
            </div>
        </div>`;
    });
}

function filterProducts() {
    let category = document.getElementById('categoryFilter').value;
    let priceFilter = document.getElementById('priceFilter').value;
    let filteredProducts = products;

    // Filter by category
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
    }

    // Sort by price
    if (priceFilter === 'low-to-high') {
        filteredProducts.sort((a, b) => a.amount - b.amount);
    } else if (priceFilter === 'high-to-low') {
        filteredProducts.sort((a, b) => b.amount - a.amount);
    }

    renderProducts(filteredProducts);
}

document.getElementById('categoryFilter').addEventListener('change', filterProducts);
document.getElementById('priceFilter').addEventListener('change', filterProducts);

let checkOut = JSON.parse(localStorage.getItem('checkout')) || [];
// Cart count
document.querySelector('[counter]').textContent = checkOut.length || 0;

// Add to cart
function addToCart(product) {
  checkOut.push(product);
  localStorage.setItem('checkout', JSON.stringify(checkOut));
  document.querySelector('[counter]').textContent = checkOut.length;
  console.log(product);
}

// Initial render
renderProducts(products);

document.getElementById("searchButton").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const searchedProducts = products.filter(product => product.productName.toLowerCase().includes(searchQuery));
    createProductCards(searchedProducts);
});

document.querySelectorAll(".nav-link").forEach(navLink => {
    if (navLink.href === window.location.href) {
        navLink.classList.add("active");3
    
    }
});

let spinnerWrapper = document.querySelector('.spinner-wrapper');

setTimeout(() =>{
spinnerWrapper.style.opacity = '0'; 
}, 200);