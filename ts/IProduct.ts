import { Product } from "./Product";

interface IProduct {
    createProduct(Product: Product): void;
    updateProduct(Product: Product): Product;
    deleteProduct(Product: Product): void;
    getProducts(): Product[];
    getProduct(id:number):Product;
}


export { IProduct }