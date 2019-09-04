import { Category } from "./Category";

interface ICategory {
    createCategory(category: Category): void;
    updateCategory(category: Category): Category;
    deleteCategory(category: Category): void;
    getCategories(): Category[];
    getCategory(id:number):Category;
}


export { ICategory }