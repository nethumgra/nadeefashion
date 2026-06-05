// Auto-generated layout components

export const headerHTML = `
<div class="bg-black text-white py-2 text-sm">
        <div class="w-full max-w-[1920px] xl:px-12 mx-auto flex justify-between items-center px-4">
            <button class="text-gray-400 hover:text-white"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
            <span class="text-xs md:text-sm">Free Standard Shipping on Orders Over Rs. 5000</span>
            <button class="text-gray-400 hover:text-white"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
        </div>
    </div>

    <nav class="bg-white text-gray-800 sticky top-0 z-40 border-b">
        <div class="w-full max-w-[1920px] xl:px-12 mx-auto px-4 py-4 flex items-center justify-between">
            
            <!-- Left: Hamburger Menu -->
            <button class="text-gray-800 hover:text-teal-600 focus:outline-none" id="mobile-menu-btn">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            
            <!-- Center: Logo -->
            <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <a href="index.html" class="flex items-center">
                    <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Nadee Fashion Logo" class="h-8 md:h-10 mr-2 site-logo-img">
                    <span class="text-xl md:text-2xl font-semibold tracking-widest text-black">Nadee Fashion</span>
                </a>
            </div>

            <!-- Right: Icons (User & Cart) -->
            <div class="flex items-center space-x-4 md:space-x-6">
                <!-- Hide wishlist on desktop to match mockup, or keep it inside hamburger. For now, keep it hidden on main nav to match mockup which only has user and bag. -->
                <button id="user-button" class="hover:text-teal-600 focus:outline-none">
                    <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                </button>
                <button id="cart-button" class="hover:text-teal-600 relative focus:outline-none">
                    <!-- Shopping Bag Icon to match mockup -->
                    <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"></path></svg>
                    <span id="cart-count" class="absolute -top-1 -right-2 bg-white text-black text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-gray-800">0</span>
                </button>
            </div>
        </div>
        
        <!-- Search Bar Below Header -->
        <div class="w-full max-w-[1920px] xl:px-12 mx-auto px-4 pb-4">
            <form id="desktop-search-form" class="w-full flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                <input type="text" id="desktop-search-input" placeholder="Search for products, categories..." class="flex-grow py-2.5 px-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none">
                <button type="submit" class="px-5 py-2.5 bg-black text-white hover:bg-gray-800 transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </form>
        </div>
    </nav>
`;

export const footerHTML = `
<footer class="bg-gray-800 text-white">
        <div class="w-full max-w-[1920px] xl:px-12 mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">Nadee Fashion</h3>
                    <p class="text-gray-400 text-sm">
                        Discover premium quality t-shirts designed for comfort and style. Your new favorite tee awaits.
                    </p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Shop</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#product-grid-container" onclick="setCategoryFilter('Men\'s Linen Pants');" class="text-gray-400 hover:text-white">Men's Linen Pants</a></li>
                        <li><a href="#product-grid-container" onclick="setCategoryFilter('Ladies\' Linen Pants');" class="text-gray-400 hover:text-white">Ladies' Linen Pants</a></li>
                        <li><a href="#product-grid-container" onclick="setCategoryFilter('Linen Shirts');" class="text-gray-400 hover:text-white">Linen Shirts</a></li>
                        <li><a href="#product-grid-container" onclick="setCategoryFilter('Ladies\' Linen Shorts');" class="text-gray-400 hover:text-white">Ladies' Linen Shorts</a></li>
                        <li><a href="#product-grid-container" onclick="setCategoryFilter('Viscose Casual Shirts');" class="text-gray-400 hover:text-white">Viscose Casual Shirts</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Help</h3>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#get-in-touch" class="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#get-in-touch" class="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Size Guide</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Stay Connected</h3>
                    <p class="text-gray-400 text-sm mb-3">Get exclusive deals and updates straight to your inbox.</p>
                    <form class="flex">
                        <input type="email" placeholder="Your Email" class="w-full rounded-l-md py-2 px-3 text-gray-800 focus:outline-none">
                        <button type="submit" class="bg-teal-600 hover:bg-teal-700 rounded-r-md px-4 py-2 font-semibold">Go</button>
                    </form>
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.351C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z"></path></svg></a>
                        <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a>
                        <a href="#" class="text-gray-400 hover:text-white"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.294 1.634 4.208 3.803 4.649-.623.169-1.272.23-1.933.23-.3 0-.594-.029-.884-.084.618 1.884 2.408 3.258 4.533 3.3-1.625 1.27-3.673 2.022-5.904 2.022-.383 0-.76-.022-1.13-.066 2.099 1.353 4.606 2.148 7.321 2.148 8.778 0 13.59-7.278 13.59-13.59 0-.205-.005-.409-.013-.612.932-.672 1.738-1.512 2.379-2.465z"></path></svg></a>
                    </div>
                </div>
            </div>
            <div class="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
                <p>&copy; 2025 Nadee Fashion. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
`;

export const modalsHTML = `
<!-- Mobile Navigation Drawer -->
    <div id="mobile-nav-drawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden lg:hidden">
        <div id="mobile-nav-panel" class="sidebar-panel absolute top-0 left-0 h-full w-full max-w-xs bg-white shadow-xl transform -translate-x-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <span class="text-lg font-medium text-gray-900">Categories</span>
                <button onclick="toggleMobileNavDrawer(false)" class="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <!-- Body: Links & Categories -->
            <div class="flex-grow overflow-y-auto p-4 space-y-6 custom-scrollbar">
                <!-- Core Navigation -->
                <div class="space-y-1">
                    <a href="index.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        Home
                    </a>
                    <a href="my-orders.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        My Orders
                    </a>
                    <a href="wishlist.html" class="flex items-center gap-3 py-3 px-4 text-gray-900 hover:bg-gray-50 rounded-lg transition font-medium">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"></path></svg>
                        Wishlist
                    </a>
                </div>
                
                <hr class="border-gray-100">
                
                <!-- Dynamic Category List -->
                <div class="space-y-1">
                    <span class="block px-4 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Shop Categories</span>
                    <div id="mobile-nav-categories" class="space-y-1">
                        <!-- Loaded dynamically -->
                        <p class="text-xs text-gray-400 px-4">Loading categories...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Drawer -->
    <div id="cart-drawer" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
        <div id="cart-drawer-panel" class="sidebar-panel absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transform translate-x-full flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b">
                <h2 class="text-lg font-semibold flex items-center gap-2">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"></path></svg>
                    Shopping Bag
                </h2>
                <button onclick="toggleCartDrawer(false)" class="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <!-- Cart Items List (Scrollable) -->
            <div id="cart-drawer-items" class="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
                <p class="text-center text-gray-500 py-8">Your shopping bag is empty.</p>
            </div>
            <!-- Summary & Checkout (Sticky bottom) -->
            <div class="p-4 border-t bg-gray-50 space-y-4">
                <div class="flex justify-between font-medium text-gray-700 text-sm">
                    <span>Subtotal</span>
                    <span id="cart-drawer-subtotal">Rs. 0</span>
                </div>
                <p class="text-xs text-gray-400">Shipping and taxes calculated at checkout.</p>
                <a href="checkout.html" class="block text-center w-full bg-black text-white font-bold py-3.5 rounded-md hover:bg-gray-800 transition">
                    Proceed to Checkout
                </a>
                <button onclick="toggleCartDrawer(false)" class="block text-center w-full text-sm font-semibold text-gray-700 hover:text-black hover:underline transition">
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-filter-sidebar" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden lg:hidden">
        <div id="mobile-filter-panel" class="sidebar-panel absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl transform translate-x-full flex flex-col">
            <div class="flex items-center justify-between p-4 border-b">
                <h2 class="text-lg font-semibold">Filters</h2>
                <button id="close-filter-btn" class="p-2 rounded-full hover:bg-gray-100"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </div>
            <div class="p-4 space-y-6 overflow-y-auto flex-grow custom-scrollbar">
                <div>
                    <h3 class="font-semibold mb-2">Brand</h3>
                    <input type="text" id="mobile-brand-search" placeholder="Search Brand" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3">
                    <div id="mobile-brand-filter-list" class="space-y-2 max-h-40 overflow-y-auto"></div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Category</h3>
                    <div id="mobile-category-filter-list" class="space-y-2"></div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Size</h3>
                    <div class="border-b border-gray-200">
                        <nav class="-mb-px flex space-x-4" aria-label="Tabs">
                            <button class="size-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm border-teal-500 text-teal-600" data-tab="brand-size">Brand Size</button>
                            <button class="size-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500" data-tab="eu">EU</button>
                        </nav>
                    </div>
                    <div class="mt-4">
                        <div id="mobile-size-filter-list">
                            <div class="tab-panel active grid grid-cols-4 gap-2" data-panel="brand-size">
                                <button data-size="XXS" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XXS</button>
                                <button data-size="XS" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XS</button>
                                <button data-size="S" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">S</button>
                                <button data-size="M" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">M</button>
                                <button data-size="L" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">L</button>
                                <button data-size="XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">XL</button>
                                <button data-size="2XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">2XL</button>
                                <button data-size="3XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">3XL</button>
                                <button data-size="4XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">4XL</button>
                                <button data-size="5XL" class="size-btn p-2 border border-gray-300 rounded-md text-sm hover:border-black">5XL</button>
                            </div>
                            <div class="tab-panel" data-panel="eu"><p class="text-xs text-gray-400">EU sizes not available.</p></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="font-semibold mb-2">Price Range</h3>
                    <div class="flex items-center space-x-2">
                        <input type="number" id="mobile-min-price" placeholder="Min" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" min="0">
                        <span class="text-gray-500">-</span>
                        <input type="number" id="mobile-max-price" placeholder="Max" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" min="0">
                    </div>
                </div>
            </div>
            <div class="p-4 border-t bg-white flex space-x-2">
                <button id="mobile-clear-filters-btn" class="w-1/2 bg-gray-200 text-gray-800 font-bold py-2.5 rounded-md hover:bg-gray-300 transition">Clear All</button>
                <button id="mobile-apply-filters-btn" class="w-1/2 bg-teal-600 text-white font-bold py-2.5 rounded-md hover:bg-teal-700 transition">Apply</button>
            </div>
        </div>
    </div>

    <div id="auth-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden">
         <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
             <div class="flex border-b">
                 <button id="login-tab" class="flex-1 py-3 font-semibold text-center bg-gray-100 text-gray-800 rounded-tl-lg">Login</button>
                 <button id="signup-tab" class="flex-1 py-3 font-semibold text-center bg-white text-gray-500">Sign Up</button>
             </div>
             <div class="p-8">
                 <form id="login-form" class="space-y-4">
                     <div>
                         <label for="login-email" class="block text-sm font-medium text-gray-700">Email Address</label>
                         <input type="email" id="login-email" required class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                     </div>
                     <div>
                         <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
                         <input type="password" id="login-password" required class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                     </div>
                     <button type="submit" class="w-full bg-teal-600 text-white font-bold py-2.5 rounded-md hover:bg-teal-700 transition">Login</button>
                 </form>
                 <form id="signup-form" class="space-y-4 hidden">
                     <div>
                         <label for="signup-email" class="block text-sm font-medium text-gray-700">Email Address</label>
                         <input type="email" id="signup-email" required class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                     </div>
                     <div>
                         <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
                         <input type="password" id="signup-password" minlength="6" required class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
                         <p class="text-xs text-gray-500 mt-1">Must be at least 6 characters long.</p>
                     </div>
                     <button type="submit" class="w-full bg-teal-600 text-white font-bold py-2.5 rounded-md hover:bg-teal-700 transition">Create Account</button>
                 </form>
                 <div class="relative flex py-5 items-center">
                     <div class="flex-grow border-t border-gray-200"></div>
                     <span class="flex-shrink mx-4 text-xs text-gray-400 uppercase">Or</span>
                     <div class="flex-grow border-t border-gray-200"></div>
                 </div>
                 <button id="google-signin-btn" class="w-full flex items-center justify-center py-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                     <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.223 0-9.641-3.657-11.297-8.591l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.574l6.19 5.238C42.012 35.245 44 30.024 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
                     Sign in with Google
                 </button>
                 <p id="auth-error" class="text-red-500 text-sm mt-4 text-center"></p>
             </div>
         </div>
    </div>
    
    <div id="user-info-modal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center">
            <h2 class="text-lg font-medium text-gray-900">Welcome!</h2>
            <p id="user-email-display" class="mt-2 text-sm text-gray-600 truncate"></p>
            <a href="my-orders.html" id="my-orders-button" class="mt-4 w-full block bg-teal-600 text-white font-bold py-2.5 rounded-md hover:bg-teal-700 transition">My Orders</a>
            <button id="logout-button" class="mt-2 w-full bg-red-600 text-white font-bold py-2.5 rounded-md hover:bg-red-700 transition">Logout</button>
            <button id="close-user-modal" class="mt-2 w-full text-gray-600 text-sm py-2">Close</button>
        </div>
    </div>

`;
