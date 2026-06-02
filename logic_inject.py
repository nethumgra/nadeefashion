import re

drawer_logic = """
        window.toggleMobileNavDrawer = function(show) {
            const drawer = document.getElementById('mobile-nav-drawer');
            const panel = document.getElementById('mobile-nav-panel');
            if (!drawer || !panel) return;
            if (show) {
                drawer.classList.remove('hidden');
                setTimeout(() => panel.classList.remove('-translate-x-full'), 10);
            } else {
                panel.classList.add('-translate-x-full');
                setTimeout(() => drawer.classList.add('hidden'), 300);
            }
        };

        window.toggleCartDrawer = function(show) {
            const drawer = document.getElementById('cart-drawer');
            const panel = document.getElementById('cart-drawer-panel');
            if (!drawer || !panel) return;
            if (show) {
                drawer.classList.remove('hidden');
                setTimeout(() => panel.classList.remove('translate-x-full'), 10);
            } else {
                panel.classList.add('translate-x-full');
                setTimeout(() => drawer.classList.add('hidden'), 300);
            }
        };

        window.removeCartDrawerItem = async function(itemId) {
            const user = auth.currentUser;
            if (!user) return;
            const cartItemRef = doc(db, 'carts', user.uid, 'items', itemId);
            try {
                await deleteDoc(cartItemRef);
            } catch (error) {
                console.error("Error removing cart item:", error);
            }
        };

        window.changeCartDrawerQty = async function(itemId, change) {
            const user = auth.currentUser;
            if (!user) return;
            const cartItemRef = doc(db, 'carts', user.uid, 'items', itemId);
            try {
                const docSnap = await getDoc(cartItemRef);
                if (docSnap.exists()) {
                    const currentQty = docSnap.data().quantity || 1;
                    const newQty = currentQty + change;
                    if (newQty <= 0) {
                        await deleteDoc(cartItemRef);
                    } else {
                        await updateDoc(cartItemRef, { quantity: newQty });
                    }
                }
            } catch (error) {
                console.error("Error changing cart quantity:", error);
            }
        };

        window.updateCartDrawerUI = function(items) {
            const container = document.getElementById('cart-drawer-items');
            const subtotalEl = document.getElementById('cart-drawer-subtotal');
            if (!container || !subtotalEl) return;
            
            if (items.length === 0) {
                container.innerHTML = `<p class="text-center text-gray-500 py-8">Your shopping bag is empty.</p>`;
                subtotalEl.textContent = 'Rs. 0';
                return;
            }
            
            let subtotal = 0;
            let itemsHTML = '';
            items.forEach(item => {
                subtotal += item.price * item.quantity;
                itemsHTML += `
                    <div class="flex items-center space-x-3 border-b pb-3">
                        <img src="${item.imageUrl || 'https://placehold.co/100x100/e2e8f0/64748b?text=No+Image'}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md flex-shrink-0">
                        <div class="flex-grow min-w-0">
                            <p class="font-semibold text-gray-800 text-sm truncate">${item.name}</p>
                            <p class="text-xs text-gray-500">Size: ${item.size}</p>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-sm font-bold text-gray-900">Rs. ${item.price.toLocaleString()}</span>
                                ${item.oldPrice ? `<span class="text-xs text-gray-400 line-through">Rs. ${item.oldPrice.toLocaleString()}</span>` : ''}
                            </div>
                        </div>
                        <div class="flex flex-col items-end justify-between h-16 flex-shrink-0">
                            <button onclick="removeCartDrawerItem('${item.id}')" class="text-gray-400 hover:text-red-500" title="Remove">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                            </button>
                            <div class="flex items-center border border-gray-200 rounded">
                                <button onclick="changeCartDrawerQty('${item.id}', -1)" class="px-1.5 py-0.5 text-gray-500 hover:bg-gray-100 text-xs font-bold">-</button>
                                <span class="px-2 text-xs font-semibold text-gray-700">${item.quantity}</span>
                                <button onclick="changeCartDrawerQty('${item.id}', 1)" class="px-1.5 py-0.5 text-gray-500 hover:bg-gray-100 text-xs font-bold">+</button>
                            </div>
                        </div>
                    </div>`;
            });
            
            container.innerHTML = itemsHTML;
            subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
        };
"""

event_listeners = """
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', () => toggleMobileNavDrawer(true));
            }

            const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
            if (mobileNavDrawer) {
                mobileNavDrawer.addEventListener('click', (e) => {
                    if (e.target === mobileNavDrawer) toggleMobileNavDrawer(false);
                });
            }

            const cartButton = document.getElementById('cart-button');
            if (cartButton) {
                cartButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!auth.currentUser) {
                        authModal.classList.remove('hidden');
                    } else {
                        toggleCartDrawer(true);
                    }
                });
            }

            const cartDrawer = document.getElementById('cart-drawer');
            if (cartDrawer) {
                cartDrawer.addEventListener('click', (e) => {
                    if (e.target === cartDrawer) toggleCartDrawer(false);
                });
            }
"""

with open('product-detail.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add drawer logic functions right before DOMContentLoaded
target1 = "document.addEventListener('DOMContentLoaded', async () => {"
content = content.replace(target1, drawer_logic + "\n        " + target1)

# Add event listeners inside DOMContentLoaded
target2 = "setupAuthModal();"
content = content.replace(target2, target2 + "\n" + event_listeners)

# Update the cart listener in onAuthStateChanged to also update the drawer UI
cart_listener_old = """                onSnapshot(collection(db, 'carts', user.uid, 'items'), snapshot => {
                    cartCountEl.textContent = snapshot.size;
                    cartCountEl.classList.toggle('hidden', snapshot.size === 0);
                });"""
cart_listener_new = """                onSnapshot(collection(db, 'carts', user.uid, 'items'), snapshot => {
                    cartCountEl.textContent = snapshot.size;
                    cartCountEl.classList.toggle('hidden', snapshot.size === 0);
                    
                    const cartItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    if(window.updateCartDrawerUI) window.updateCartDrawerUI(cartItems);
                });"""
content = content.replace(cart_listener_old, cart_listener_new)

with open('product-detail.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated product-detail.html with drawer logic")
