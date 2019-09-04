import { Category } from "./Category";

class Product {
    id: number;
    name: string;
    description: string;
    category: Category;
    price: number;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    setCategory(category: Category) {
        this.category = category;
    }

    setPrice(price: number) {
        this.price = price;
    }
}

export { Product }