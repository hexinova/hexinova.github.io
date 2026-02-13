// Product Data
const productData = {
    "groups": {
        "Volt": {
            "logo": "https://bloxproducts.com/assets/images/volt.png",
            "category": "executor",
            "items": [
                {
                    "name": "Volt 7 Days",
                    "purchase": "https://stealthpay.io/cat/volt-week-key?r=nick",
                    "price": 5.39,
                    "lifetime": false,
                    "subscriptionPeriod": "7 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*UNDETECTED",
                        "Volt for Windows",
                        "7-Day license",
                        "Free support",
                        "Longest running"
                    ]
                },
                {
                    "name": "Volt 30 Days",
                    "purchase": "https://stealthpay.io/cat/volt-month-key?r=nick",
                    "price": 17.99,
                    "lifetime": false,
                    "subscriptionPeriod": "30 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*UNDETECTED",
                        "Volt for Windows",
                        "30-Day license",
                        "Free support",
                        "Longest running"
                    ]
                },
                {
                    "name": "Volt 90 Days",
                    "purchase": "https://stealthpay.io/cat/volt-quarterly-key?r=nick",
                    "price": 44.99,
                    "lifetime": false,
                    "subscriptionPeriod": "90 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*UNDETECTED",
                        "Volt for Windows",
                        "90-Day license",
                        "Free support",
                        "Longest running"
                    ]
                }
            ]
        },
        "Wave": {
            "logo": "https://bloxproducts.com/assets/images/wave.png",
            "category": "executor",
            "items": [
                {
                    "name": "Wave 7 Days",
                    "purchase": "https://stealthpay.io/cat/wave-week-key?r=nick",
                    "price": 5.39,
                    "lifetime": false,
                    "subscriptionPeriod": "7 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Cheapest",
                        "Wave for Windows",
                        "7-Day license",
                        "Free support",
                        "Longest running"
                    ]
                },
                {
                    "name": "Wave 30 Days",
                    "purchase": "https://stealthpay.io/cat/wave-month-key?r=nick",
                    "price": 17.09,
                    "lifetime": false,
                    "subscriptionPeriod": "30 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Most popular",
                        "Wave for Windows",
                        "30-Day license",
                        "Free support",
                        "Longest running"
                    ]
                }
            ]
        },
        "Potassium": {
            "logo": "https://bloxproducts.com/assets/images/potassium.png",
            "category": "executor",
            "items": [
                {
                    "name": "Lifetime",
                    "purchase": "https://stealthpay.io/cat/potassium?r=nick",
                    "price": 20.69,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*LIFETIME",
                        "Executes ALL Scripts",
                        "Undetected",
                        "Easy Setup",
                        "Works on Windows 10 & 11"
                    ]
                }
            ]
        },
        "Serotonin": {
            "logo": "https://bloxproducts.com/assets/images/serotonin.png",
            "category": "external",
            "items": [
                {
                    "name": "30 Days",
                    "purchase": "https://stealthpay.io/cat/serotonin-month?r=nick",
                    "price": 8.54,
                    "lifetime": false,
                    "subscriptionPeriod": "30 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Undetected External",
                        "Serotonin for Windows",
                        "30-Day license",
                        "Free support",
                        "Easy setup"
                    ]
                },
                {
                    "name": "90 Days",
                    "purchase": "https://stealthpay.io/cat/serotonin-90d?r=nick",
                    "price": 20.69,
                    "lifetime": false,
                    "subscriptionPeriod": "90 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Undetected External",
                        "Serotonin for Windows",
                        "90-Day license",
                        "Free support",
                        "Easy setup"
                    ]
                }
            ]
        },
        "Severe": {
            "logo": "https://bloxproducts.com/assets/images/severe.png",
            "category": "external",
            "items": [
                {
                    "name": "Lifetime",
                    "purchase": "https://stealthpay.io/cat/severe-lifetime-key?r=nick",
                    "price": 17.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*External",
                        "TOP-RATED",
                        "Lifetime License",
                        "Easy Setup",
                        "Undetectable"
                    ]
                }
            ]
        },
        "RbxCli": {
            "logo": "https://bloxproducts.com/assets/images/rbxcli.png",
            "category": "external",
            "items": [
                {
                    "name": "7 Days",
                    "purchase": "https://stealthpay.io/cat/rbxcli-weekly?r=nick",
                    "price": 3.59,
                    "lifetime": false,
                    "subscriptionPeriod": "7 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Undetected External",
                        "RbxCli for Windows",
                        "7-Day license",
                        "Free support",
                        "Easy setup"
                    ]
                },
                {
                    "name": "30 Days",
                    "purchase": "https://stealthpay.io/cat/rbxcli-monthly?r=nick",
                    "price": 7.19,
                    "lifetime": false,
                    "subscriptionPeriod": "30 Days",
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*Undetected External",
                        "RbxCli for Windows",
                        "30-Day license",
                        "Free support",
                        "Easy setup"
                    ]
                }
            ]
        },
        "Ronin": {
            "logo": "https://bloxproducts.com/assets/images/ronin.png",
            "category": "external",
            "items": [
                {
                    "name": "Lifetime",
                    "purchase": "https://stealthpay.io/cat/ronin?r=nick",
                    "price": 8.63,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*External",
                        "OP Aimbot",
                        "Lifetime License",
                        "Easy Setup",
                        "Undetectable"
                    ]
                }
            ]
        },
        "Matcha": {
            "logo": "https://bloxproducts.com/assets/images/matcha.png",
            "category": "external",
            "items": [
                {
                    "name": "Lifetime",
                    "purchase": "https://stealthpay.io/cat/matcha?r=nick",
                    "price": 8.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/windows.png",
                    "features": [
                        "*External",
                        "OP Aimbot",
                        "Lifetime License",
                        "Easy Setup",
                        "Undetectable"
                    ]
                }
            ]
        },
        "Cryptic": {
            "logo": "https://bloxproducts.com/assets/images/cryptic.png",
            "category": "executor",
            "defaultPlatform": "windows",
            "platforms": {
                "android": {
                    "items": [
                        {
                            "name": "Cryptic 30 Days",
                            "purchase": "https://stealthpay.io/cat/cryptic-30-days?r=nick",
                            "price": 4.49,
                            "lifetime": false,
                            "subscriptionPeriod": "30 Days",
                            "device": "https://bloxproducts.com/assets/images/android.png",
                            "features": [
                                "*Most popular",
                                "Cryptic for Android",
                                "30-Day license",
                                "Free support",
                                "Easy setup"
                            ]
                        },
                        {
                            "name": "Cryptic 90 Days",
                            "purchase": "https://stealthpay.io/cat/cryptic-90-days?r=nick",
                            "price": 8.99,
                            "lifetime": false,
                            "subscriptionPeriod": "90 Days",
                            "device": "https://bloxproducts.com/assets/images/android.png",
                            "features": [
                                "Undetected",
                                "Cryptic for Android",
                                "90-Day license",
                                "Free support",
                                "Easy setup"
                            ]
                        },
                        {
                            "name": "Cryptic Lifetime",
                            "purchase": "https://stealthpay.io/cat/cryptic-lifetime?r=nick",
                            "price": 21.59,
                            "lifetime": true,
                            "device": "https://bloxproducts.com/assets/images/android.png",
                            "features": [
                                "*Most value",
                                "Cryptic for Android",
                                "Lifetime License",
                                "Free support",
                                "Easy setup"
                            ]
                        }
                    ]
                },
                "windows": {
                    "items": [
                        {
                            "name": "Cryptic 7 Days",
                            "purchase": "https://stealthpay.io/cat/cryptic-windows-weekly?r=nick",
                            "price": 4.49,
                            "lifetime": false,
                            "subscriptionPeriod": "7 Days",
                            "device": "https://bloxproducts.com/assets/images/windows.png",
                            "features": [
                                "*Most popular",
                                "Cryptic for Windows",
                                "7-Day license",
                                "Free support",
                                "Easy setup"
                            ]
                        },
                        {
                            "name": "Cryptic 30 Days",
                            "purchase": "https://stealthpay.io/cat/cryptic-windows-monthly?r=nick",
                            "price": 16.19,
                            "lifetime": false,
                            "subscriptionPeriod": "30 Days",
                            "device": "https://bloxproducts.com/assets/images/windows.png",
                            "features": [
                                "*30 DAYS",
                                "Cryptic for Windows",
                                "30-Day license",
                                "Free support",
                                "Easy setup"
                            ]
                        },
                        {
                            "name": "Cryptic 90 Days",
                            "purchase": "https://stealthpay.io/cat/cryptic-windows-90-days?r=nick",
                            "price": 35.99,
                            "lifetime": false,
                            "subscriptionPeriod": "90 Days",
                            "device": "https://bloxproducts.com/assets/images/windows.png",
                            "features": [
                                "Undetected",
                                "Cryptic for Windows",
                                "90-Day license",
                                "Free support",
                                "Easy setup"
                            ]
                        }
                    ]
                }
            }
        },
        "Aureus": {
            "logo": "https://bloxproducts.com/assets/images/aureus.png",
            "category": "serverside",
            "items": [
                {
                    "name": "Standard",
                    "purchase": "https://stealthpay.io/cat/aureus-standard?r=nick",
                    "price": 13.49,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/alldevices.png",
                    "features": [
                        "*Standard",
                        "Budget-friendly version",
                        "Lifetime License",
                        "Free support",
                        "Undetectable"
                    ]
                },
                {
                    "name": "Premium",
                    "purchase": "https://stealthpay.io/cat/aureus-premium?r=nick",
                    "price": 44.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/alldevices.png",
                    "features": [
                        "*Premium (OP)",
                        "Best Serverside",
                        "Lifetime License",
                        "Free support",
                        "Undetectable"
                    ]
                }
            ]
        },
        "Exoliner": {
            "logo": "https://bloxproducts.com/assets/images/exoliner.png",
            "category": "serverside",
            "items": [
                {
                    "name": "Standard",
                    "purchase": "https://stealthpay.io/cat/exoliner-standard?r=nick",
                    "price": 8.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/alldevices.png",
                    "features": [
                        "*Cheap",
                        "Budget-friendly SS",
                        "Lifetime License",
                        "Free support",
                        "Undetectable"
                    ]
                },
                {
                    "name": "Premium",
                    "purchase": "https://stealthpay.io/cat/exoliner-premium?r=nick",
                    "price": 35.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/alldevices.png",
                    "features": [
                        "*Overpowered",
                        "Best value Serverside",
                        "Lifetime License",
                        "Free support",
                        "Undetectable"
                    ]
                }
            ]
        },
        "MacSploit": {
            "logo": "https://bloxproducts.com/assets/images/macsploit.png",
            "category": "executor",
            "items": [
                {
                    "name": "MacSploit Lifetime",
                    "purchase": "https://stealthpay.io/cat/macsploit?r=nick",
                    "price": 8.99,
                    "lifetime": true,
                    "device": "https://bloxproducts.com/assets/images/mac.png",
                    "features": [
                        "*MacOS execution",
                        "Cheapest on market",
                        "Lifetime License",
                        "Free support",
                        "High UNC"
                    ]
                }
            ]
        }
    }
};

// Global state
let currentFilter = 'all';
let currentCategory = 'all';
let currentPriceRange = 'all';
let currentPriceSort = 'asc';
let crypticPlatform = 'windows';

// Utility Functions
function getDevicePlatform(deviceUrl) {
    if (deviceUrl.includes('windows')) return 'windows';
    if (deviceUrl.includes('android')) return 'android';
    if (deviceUrl.includes('mac')) return 'macos';
    if (deviceUrl.includes('alldevices')) return 'all';
    return 'windows';
}

function sortItemsByPrice(items, sortOrder = 'asc') {
    return [...items].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

function isInPriceRange(price, range) {
    if (range === 'all') return true;
    
    if (range === '0-10') return price < 10;
    if (range === '10-20') return price >= 10 && price < 20;
    if (range === '20-30') return price >= 20 && price < 30;
    if (range === '30+') return price >= 30;
    
    return true;
}

function shouldShowItem(item, filter, priceRange) {
    // Check platform filter
    if (filter !== 'all') {
        const platform = getDevicePlatform(item.device);
        if (platform !== 'all' && platform !== filter) {
            return false;
        }
    }
    
    // Check price range
    if (!isInPriceRange(item.price, priceRange)) {
        return false;
    }
    
    return true;
}

function shouldShowGroup(groupData, categoryFilter) {
    if (categoryFilter === 'all') return true;
    return groupData.category === categoryFilter;
}

// Card Creation Functions
function createProductCard(item) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Extract badges from features
    const badges = item.features.filter(f => f.startsWith('*'));
    const regularFeatures = item.features.filter(f => !f.startsWith('*'));
    
    card.innerHTML = `
        <div class="card-header">
            <h3 class="product-name">${item.name}</h3>
            <img src="${item.device}" alt="Device" class="device-icon">
        </div>
        
        <div class="price-section">
            <div class="price">$${item.price.toFixed(2)}</div>
            ${item.subscriptionPeriod ? `<div class="subscription-period">${item.subscriptionPeriod}</div>` : 
              item.lifetime ? `<div class="subscription-period">Lifetime</div>` : ''}
        </div>
        
        <ul class="features-list">
            ${badges.map(badge => `<li><span class="badge">${badge.substring(1)}</span></li>`).join('')}
            ${regularFeatures.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <button class="buy-btn" onclick="window.open('${item.purchase}', '_blank')">
            Buy Now
        </button>
    `;
    
    return card;
}

function createProductGroup(groupName, groupData) {
    const group = document.createElement('div');
    group.className = 'product-group';
    group.dataset.group = groupName;
    
    // Group header with logo
    const header = document.createElement('div');
    header.className = 'group-header';
    header.innerHTML = `
        <img src="${groupData.logo}" alt="${groupName}" class="group-logo">
        <h2 class="group-name">${groupName}</h2>
    `;
    group.appendChild(header);
    
    // Handle Cryptic special case with platform toggle
    if (groupData.platforms) {
        const toggle = document.createElement('div');
        toggle.className = 'platform-toggle';
        toggle.innerHTML = `
            <button class="platform-btn ${crypticPlatform === 'windows' ? 'active' : ''}" data-platform="windows">
                Windows
            </button>
            <button class="platform-btn ${crypticPlatform === 'android' ? 'active' : ''}" data-platform="android">
                Android
            </button>
        `;
        group.appendChild(toggle);
        
        // Add event listeners to platform buttons
        toggle.querySelectorAll('.platform-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                crypticPlatform = btn.dataset.platform;
                renderProducts();
            });
        });
        
        // Get items for current platform and sort
        const items = sortItemsByPrice(groupData.platforms[crypticPlatform].items, currentPriceSort);
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'product-cards';
        items.forEach(item => {
            cardsContainer.appendChild(createProductCard(item));
        });
        group.appendChild(cardsContainer);
    } else {
        // Regular group with sorted items
        const items = sortItemsByPrice(groupData.items, currentPriceSort);
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'product-cards';
        items.forEach(item => {
            cardsContainer.appendChild(createProductCard(item));
        });
        group.appendChild(cardsContainer);
    }
    
    return group;
}

// Rendering Functions
function renderProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    Object.entries(productData.groups).forEach(([groupName, groupData]) => {
        // Check category filter first
        if (!shouldShowGroup(groupData, currentCategory)) {
            return;
        }
        
        // Check if group has any items matching the filter
        let hasVisibleItems = false;
        
        if (groupData.platforms) {
            // Cryptic group - check current platform items
            const items = groupData.platforms[crypticPlatform].items;
            hasVisibleItems = items.some(item => shouldShowItem(item, currentFilter, currentPriceRange));
        } else {
            // Regular group
            hasVisibleItems = groupData.items.some(item => shouldShowItem(item, currentFilter, currentPriceRange));
        }
        
        if (hasVisibleItems || (currentFilter === 'all' && currentPriceRange === 'all')) {
            const groupElement = createProductGroup(groupName, groupData);
            
            // For non-Cryptic groups, filter cards if needed
            if (!groupData.platforms && (currentFilter !== 'all' || currentPriceRange !== 'all')) {
                const cards = groupElement.querySelectorAll('.product-card');
                let visibleCount = 0;
                
                cards.forEach((card, index) => {
                    const items = groupData.items;
                    const item = sortItemsByPrice(items, currentPriceSort)[index];
                    
                    if (shouldShowItem(item, currentFilter, currentPriceRange)) {
                        visibleCount++;
                    } else {
                        card.style.display = 'none';
                    }
                });
                
                // Only add group if it has visible cards
                if (visibleCount > 0) {
                    container.appendChild(groupElement);
                }
            } else {
                container.appendChild(groupElement);
            }
        }
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Platform filter buttons
    const platformButtons = document.querySelectorAll('.filter-btn[data-filter]');
    platformButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Check if it's a platform filter or category filter
            if (['all', 'windows', 'android', 'macos'].includes(filter)) {
                // Platform filter
                platformButtons.forEach(b => {
                    if (['all', 'windows', 'android', 'macos'].includes(b.dataset.filter)) {
                        b.classList.remove('active');
                    }
                });
                btn.classList.add('active');
                currentFilter = filter;
            } else if (['executor', 'external', 'serverside'].includes(filter)) {
                // Category filter
                platformButtons.forEach(b => {
                    if (['executor', 'external', 'serverside'].includes(b.dataset.filter)) {
                        b.classList.remove('active');
                    }
                });
                btn.classList.add('active');
                currentCategory = filter;
            }
            
            renderProducts();
        });
    });
    
    // Price range dropdown
    const priceRangeDropdown = document.getElementById('priceRange');
    priceRangeDropdown.addEventListener('change', (e) => {
        currentPriceRange = e.target.value;
        renderProducts();
    });
    
    // Price sort dropdown
    const priceSortDropdown = document.getElementById('priceSort');
    priceSortDropdown.addEventListener('change', (e) => {
        currentPriceSort = e.target.value;
        renderProducts();
    });
    
    // Initial render
    renderProducts();
});