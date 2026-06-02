import re

file_path = "c:/Users/USER/Downloads/kandywolrd-main/kandywolrd-main/index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the replacement block
new_block = """        async function loadAndGroupAllProductsDesktop(isLoadMore = false) {
            if (!isLoadMore) {
                mainContentArea.innerHTML = `<p class="text-center text-gray-500">Loading...</p>`;
                lastVisibleProduct = null;
                hasMoreProducts = true;
            }
            if (!hasMoreProducts) return;

            try {
                let constraints = [orderBy("createdAt", "desc"), limit(20)];
                if (isLoadMore && lastVisibleProduct) {
                    constraints.push(startAfter(lastVisibleProduct));
                }
                const productsQuery = query(collection(db, "products"), ...constraints);
                const categoriesQuery = query(collection(db, "categories"), orderBy("name"));

                const [productsSnapshot, categoriesSnapshot] = await Promise.all([
                    getDocs(productsQuery),
                    getDocs(categoriesQuery)
                ]);

                if (!isLoadMore) mainContentArea.innerHTML = '';
                
                if (productsSnapshot.empty) {
                    hasMoreProducts = false;
                    if (!isLoadMore) mainContentArea.innerHTML = '<p class="text-center text-gray-500">No products found.</p>';
                    return;
                }
                
                lastVisibleProduct = productsSnapshot.docs[productsSnapshot.docs.length - 1];
                if (productsSnapshot.docs.length < 20) {
                    hasMoreProducts = false;
                }

                const categoryImageMap = new Map();
                categoriesSnapshot.forEach(doc => {
                    const categoryData = doc.data();
                    categoryImageMap.set(categoryData.name, categoryData.bannerUrl || categoryData.imageUrl);
                });

                const productsByCategory = {};
                productsSnapshot.forEach(doc => {
                    const product = { id: doc.id, ...doc.data() };
                    const category = product.category || 'Other Products';
                    if (!productsByCategory[category]) productsByCategory[category] = [];
                    productsByCategory[category].push(product);
                });

                const sortedCategories = Object.keys(productsByCategory).sort();

                for (const category of sortedCategories) {
                    let categoryId = `desktop-category-grid-${category.replace(/[^a-zA-Z0-9]/g, '-')}`;
                    let grid = document.getElementById(categoryId);
                    
                    if (!grid) {
                        const imageUrl = categoryImageMap.get(category);
                        if (imageUrl) {
                            const categoryImage = document.createElement('img');
                            categoryImage.src = imageUrl;
                            categoryImage.alt = `${category} Banner`;
                            categoryImage.className = 'w-full h-auto object-cover rounded-lg shadow-md mb-8 mt-8';
                            mainContentArea.appendChild(categoryImage);
                        } else {
                            const header = document.createElement('h2');
                            header.className = 'text-2xl font-bold text-gray-800 mb-6 mt-8 border-b pb-2';
                            header.textContent = category;
                            mainContentArea.appendChild(header);
                        }

                        grid = document.createElement('div');
                        grid.id = categoryId;
                        grid.className = 'grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10';
                        mainContentArea.appendChild(grid);
                    }
                    
                    productsByCategory[category].forEach(p => grid.appendChild(createProductCardElement(p.id, p)));
                }
            } catch (error) {
                console.error("Error loading grouped products and categories:", error);
                if (!isLoadMore) mainContentArea.innerHTML = '<p class="text-center text-red-500">Failed to load content.</p>';
            }
        }

        async function loadAndGroupAllProductsMobile(isLoadMore = false) {
            if (!isLoadMore) {
                mainContentArea.innerHTML = `<p class="text-center text-gray-500">Loading...</p>`;
                lastVisibleProduct = null;
                hasMoreProducts = true;
            }
            if (!hasMoreProducts) return;
            
            try {
                let constraints = [orderBy("createdAt", "desc"), limit(20)];
                if (isLoadMore && lastVisibleProduct) {
                    constraints.push(startAfter(lastVisibleProduct));
                }
                const productsQuery = query(collection(db, "products"), ...constraints);
                const categoriesQuery = query(collection(db, "categories"), orderBy("name"));

                const [productsSnapshot, categoriesSnapshot] = await Promise.all([
                    getDocs(productsQuery),
                    getDocs(categoriesQuery)
                ]);

                if (!isLoadMore) {
                    mainContentArea.innerHTML = '';
                    mainContentArea.appendChild(renderMobileHeader());
                }

                if (productsSnapshot.empty) {
                    hasMoreProducts = false;
                    if (!isLoadMore) mainContentArea.innerHTML += '<p class="text-center text-gray-500 mt-4">No products found.</p>';
                    return;
                }

                lastVisibleProduct = productsSnapshot.docs[productsSnapshot.docs.length - 1];
                if (productsSnapshot.docs.length < 20) {
                    hasMoreProducts = false;
                }

                const categoryImageMap = new Map();
                categoriesSnapshot.forEach(doc => {
                    const categoryData = doc.data();
                    categoryImageMap.set(categoryData.name, categoryData.bannerUrl || categoryData.imageUrl);
                });

                const productsByCategory = {};
                productsSnapshot.forEach(doc => {
                    const product = { id: doc.id, ...doc.data() };
                    const category = product.category || 'Other Products';
                    if (!productsByCategory[category]) productsByCategory[category] = [];
                    productsByCategory[category].push(product);
                });

                const sortedCategories = Object.keys(productsByCategory).sort();

                for (const category of sortedCategories) {
                    let categoryId = `mobile-category-grid-${category.replace(/[^a-zA-Z0-9]/g, '-')}`;
                    let grid = document.getElementById(categoryId);

                    if (!grid) {
                        const imageUrl = categoryImageMap.get(category);
                        if (imageUrl) {
                            const categoryImage = document.createElement('img');
                            categoryImage.src = imageUrl;
                            categoryImage.alt = `${category} Banner`;
                            categoryImage.className = 'w-full h-auto object-cover rounded-lg shadow-md my-6';
                            mainContentArea.appendChild(categoryImage);
                        } else {
                            const header = document.createElement('h2');
                            header.className = 'text-xl font-bold text-gray-800 my-6 border-b pb-2';
                            header.textContent = category;
                            mainContentArea.appendChild(header);
                        }

                        grid = document.createElement('div');
                        grid.id = categoryId;
                        grid.className = 'grid grid-cols-2 gap-x-4 gap-y-8 mb-8';
                        mainContentArea.appendChild(grid);
                    }

                    productsByCategory[category].forEach(p => grid.appendChild(createProductCardElement(p.id, p)));
                }

            } catch (error) {
                console.error("Error loading grouped products for mobile:", error);
                if (!isLoadMore) mainContentArea.innerHTML = '<p class="text-center text-red-500">Failed to load content.</p>';
            }
        }

        async function loadProducts(isLoadMore = false) {
            const hasFilters = Object.values(currentFilters).some(val => Array.isArray(val) ? val.length > 0 : val != null);
            
            if (!isLoadMore) {
                mainContentArea.innerHTML = `<p class="text-center text-gray-500">Loading...</p>`;
                lastVisibleProduct = null;
                hasMoreProducts = true;
            }
            if (!hasMoreProducts) return;

            if (isMobileView()) {
                if (!hasFilters) {
                    await loadAndGroupAllProductsMobile(isLoadMore);
                } else {
                    if (!isLoadMore) {
                        mainContentArea.innerHTML = '';
                        mainContentArea.appendChild(renderMobileHeader());
                        const productGrid = document.createElement('div');
                        productGrid.id = 'filtered-product-grid';
                        productGrid.className = 'grid grid-cols-2 gap-x-4 gap-y-8 pt-4';
                        mainContentArea.appendChild(productGrid);
                    }
                    
                    const productGrid = document.getElementById('filtered-product-grid');

                    let constraints = [];
                    if (currentFilters.brands?.length) constraints.push(where("brand", "in", currentFilters.brands));
                    if (currentFilters.categories?.length) constraints.push(where("category", "in", currentFilters.categories));
                    if (currentFilters.sizes?.length) constraints.push(where("sizes", "array-contains-any", currentFilters.sizes));
                    if (currentFilters.minPrice != null) constraints.push(where("price", ">=", currentFilters.minPrice));
                    if (currentFilters.maxPrice != null) constraints.push(where("price", "<=", currentFilters.maxPrice));

                    constraints.push(orderBy(currentSort.field, currentSort.direction));
                    constraints.push(limit(20));
                    if (isLoadMore && lastVisibleProduct) constraints.push(startAfter(lastVisibleProduct));

                    const finalQuery = query(collection(db, "products"), ...constraints);
                    const querySnapshot = await getDocs(finalQuery);

                    if (querySnapshot.empty) {
                        hasMoreProducts = false;
                        if (!isLoadMore) productGrid.innerHTML = `<p class="col-span-full text-center text-gray-500">No products match.</p>`;
                    } else {
                        lastVisibleProduct = querySnapshot.docs[querySnapshot.docs.length - 1];
                        if (querySnapshot.docs.length < 20) hasMoreProducts = false;
                        querySnapshot.forEach((doc) => productGrid.appendChild(createProductCardElement(doc.id, doc.data())));
                    }
                }
            } else {
                if (!hasFilters) {
                    await loadAndGroupAllProductsDesktop(isLoadMore);
                } else {
                    if (!isLoadMore) {
                        mainContentArea.innerHTML = '';
                        mainContentArea.appendChild(renderDesktopHeaderAndFilters(true));
                        const productGrid = document.createElement('div');
                        productGrid.id = 'filtered-product-grid';
                        productGrid.className = 'grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10';
                        mainContentArea.appendChild(productGrid);
                    }
                    
                    const productGrid = document.getElementById('filtered-product-grid');

                    let constraints = [];
                    if (currentFilters.brands?.length) constraints.push(where("brand", "in", currentFilters.brands));
                    if (currentFilters.categories?.length) constraints.push(where("category", "in", currentFilters.categories));
                    if (currentFilters.sizes?.length) constraints.push(where("sizes", "array-contains-any", currentFilters.sizes));
                    if (currentFilters.minPrice != null) constraints.push(where("price", ">=", currentFilters.minPrice));
                    if (currentFilters.maxPrice != null) constraints.push(where("price", "<=", currentFilters.maxPrice));

                    constraints.push(orderBy(currentSort.field, currentSort.direction));
                    constraints.push(limit(20));
                    if (isLoadMore && lastVisibleProduct) constraints.push(startAfter(lastVisibleProduct));

                    const finalQuery = query(collection(db, "products"), ...constraints);
                    const querySnapshot = await getDocs(finalQuery);

                    if (querySnapshot.empty) {
                        hasMoreProducts = false;
                        if (!isLoadMore) productGrid.innerHTML = '<p class="col-span-full text-center text-gray-500">No products match your criteria.</p>';
                    } else {
                        lastVisibleProduct = querySnapshot.docs[querySnapshot.docs.length - 1];
                        if (querySnapshot.docs.length < 20) hasMoreProducts = false;
                        querySnapshot.forEach((doc) => productGrid.appendChild(createProductCardElement(doc.id, doc.data())));
                    }
                }
            }
            if (!isLoadMore) updateFilterUIs();
        }"""

pattern = re.compile(r'async function loadAndGroupAllProductsDesktop\(\) \{.*?(?=function generateStars)', re.DOTALL)

# Make sure we don't accidentally drop the trailing newlines before generateStars
content = pattern.sub(new_block + "\\n\\n        ", content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Replaced logic block successfully.")
