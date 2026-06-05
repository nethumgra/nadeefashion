// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, doc, onSnapshot, setDoc, serverTimestamp, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBy4ZHPwoXnJ3vCg9G78X7x-EbonwVeCo",
    authDomain: "nadee-3173a.firebaseapp.com",
    projectId: "nadee-3173a",
    storageBucket: "nadee-3173a.firebasestorage.app",
    messagingSenderId: "457017879995",
    appId: "1:457017879995:web:88f00000d4c9f959e8e89e",
    measurementId: "G-S2CGLGVHT8"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and export it
export const db = getFirestore(app);

// Initialize Firebase Auth and export it
export const auth = getAuth(app);

// Explicitly set persistence to local so the user stays logged in
setPersistence(auth, browserLocalPersistence)
    .catch((error) => console.error("Auth persistence error:", error));


// --- ImgBB UPLOAD HELPER FUNCTION ---
const IMGBB_API_KEY = "fd49c76998051779cbe0f58f9e048ccc"; // <-- මේ වගේ ඔයාගේ key එක දාන්න// !! IMPORTANT: මෙතනට ඔයාගේ ImgBB API Key එක දාන්න

export async function uploadImageToImgBB(file, statusCallback) {
    if (statusCallback) {
        statusCallback(`Uploading ${file.name}...`);
    }

    // Convert File to Base64 to prevent fetch hanging issues with raw File objects
    const base64Data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // Get raw base64
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });

    const formData = new FormData();
    formData.append('key', IMGBB_API_KEY);
    formData.append('image', base64Data);

    const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData,
    });
    
    const jsonResponse = await response.json();

    if (!jsonResponse.success) {
        throw new Error(`ImgBB upload failed: ${jsonResponse.error.message}`);
    }
    
    return jsonResponse.data.url;
}

// Global Site Config Listener
const logoDocRef = doc(db, 'settings', 'general');
onSnapshot(logoDocRef, (docSnap) => {
    if (docSnap.exists() && docSnap.data().siteLogo) {
        const logoUrl = docSnap.data().siteLogo;
        const logoImages = document.querySelectorAll('.site-logo-img');
        logoImages.forEach(img => {
            img.src = logoUrl;
            img.classList.remove('hidden');
        });

        const adminText = document.querySelector('.text-white.text-lg.font-bold.tracking-widest');
        if (adminText && adminText.textContent.includes('Nadee Fashion')) {
            adminText.innerHTML = `<div class="flex items-center gap-3"><img src="${logoUrl}" class="h-8 w-auto object-contain"><span>Nadee Fashion</span></div>`;
        }
    }
});

// Global User Tracker
onAuthStateChanged(auth, async (user) => {
    if (user && user.email !== 'admin@gmail.com') {
        try {
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                displayName: user.displayName || 'Customer',
                lastLogin: serverTimestamp()
            }, { merge: true });
        } catch (e) {
            console.error("Error saving user data:", e);
        }
    }
});

// Fetch categories and populate headers globally
async function loadGlobalCategories() {
    const desktopNav = document.getElementById('desktop-nav-links');
    const mobileNav = document.getElementById('mobile-nav-categories');
    
    if (!desktopNav && !mobileNav) return;

    try {
        const categoriesQuery = query(collection(db, "categories"), orderBy("name"));
        const snapshot = await getDocs(categoriesQuery);
        const categories = snapshot.docs.map(doc => doc.data().name);
        
        // 1. Update Desktop Nav Links
        if (desktopNav) {
            let html = `<a href="index.html#product-grid-container" onclick="window.handleCategoryClick(event, '')" class="hover:text-teal-600 transition whitespace-nowrap">New Arrivals</a>`;
            
            categories.forEach(cat => {
                const escapedCat = cat.replace(/'/g, "\\'");
                html += `<a href="index.html?category=${encodeURIComponent(cat)}#product-grid-container" onclick="window.handleCategoryClick(event, '${escapedCat}')" class="hover:text-teal-600 transition whitespace-nowrap">${cat}</a>`;
            });
            
            html += `<a href="index.html#product-grid-container" class="hover:text-teal-600 transition whitespace-nowrap">Sale</a>`;
            html += `<a href="index.html#get-in-touch" class="hover:text-teal-600 transition whitespace-nowrap">About Us</a>`;
            
            desktopNav.innerHTML = html;
        }
        
        // 2. Update Mobile Nav Links
        if (mobileNav) {
            const navCategoryHTML = categories.map(cat => {
                const escapedCat = cat.replace(/'/g, "\\'");
                return `<a href="index.html?category=${encodeURIComponent(cat)}#product-grid-container" onclick="window.handleCategoryClick(event, '${escapedCat}'); if(window.toggleMobileNavDrawer) window.toggleMobileNavDrawer(false);" class="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition font-medium">${cat}</a>`;
            }).join('');
            mobileNav.innerHTML = navCategoryHTML || '<p class="text-xs text-gray-400 px-4">No categories found.</p>';
        }
    } catch (err) {
        console.error("Error loading categories for navigation:", err);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadGlobalCategories);
} else {
    loadGlobalCategories();
}
