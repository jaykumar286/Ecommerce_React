export function getAllCategories(){
    return `${import.meta.env.VITE_FAKE_STORE_API}/products/categories`;
}

export function getAllProducts(){
    return `${import.meta.env.VITE_FAKE_STORE_API}/products`;
}

export function getProductByCategory(category){
    return `${import.meta.env.VITE_FAKE_STORE_API}/products/category/${category}`;
}

export function getProductById(id){
    return `${import.meta.env.VITE_FAKE_STORE_API}/products/${id}`;
}