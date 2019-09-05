import { Category } from "./Category";
import { Product } from "./Product";
import { Person } from "./Person";
import { SaleHistory } from "./SaleHistory";
import { ICategory } from "./ICategory";
import { IProduct } from "./IProduct";
import { ISaleHistory } from "./ISaleHistory";
import { Extension } from "./Extension";
import { IPerson } from "./IPerson";



class InMemoryDb
    implements ICategory, IProduct, ISaleHistory, IPerson {
    categories: Category[];
    products: Product[];
    people: Person[];
    saleHistory: SaleHistory[];

    constructor() {
        this.categories = new Array<Category>();
        this.products = new Array<Product>();
        this.people = new Array<Person>();
        this.saleHistory = new Array<SaleHistory>();
    }


    createCategory(category: Category): void {
        this.categories.push(category);
    }

    updateCategory(category: Category): Category {
        let findedIndex = Extension.getIndex(this.categories, category, "id");

        if (findedIndex != -1) {
            this.categories[findedIndex].name = category.name;
            this.categories[findedIndex].subName = category.subName;
        }
        else {
            throw new Error(`Couldn't find item`);
        }
        return this.categories[findedIndex];
    }
    deleteCategory(category: Category): void {
        let findedIndex = Extension.getIndex(this.categories, category, "id");
        if (findedIndex != -1) {
            this.categories.splice(findedIndex, 1);
        }
        else {
            throw new Error(`Couldn't find item`);
        }
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategory(id: number): Category {
        let findedIndex = Extension.getIndexById(this.categories, id);
        if (findedIndex == -1)
            throw new Error(`Couldn't find item`);
        return this.categories[findedIndex];

    }



    createProduct(product: Product): void {
        this.products.push(product);
    }

    updateProduct(product: Product): Product {
        let findedIndex = Extension.getIndex(this.products, product, "id");

        if (findedIndex != -1) {
            this.products[findedIndex].name = product.name;
            this.products[findedIndex].description = product.description;
        }
        else {
            throw new Error(`Couldn't find item`);
        }
        return this.products[findedIndex];
    }
    deleteProduct(product: Product): void {
        let findedIndex = Extension.getIndex(this.products, product, "id");
        if (findedIndex != -1) {
            this.products.splice(findedIndex, 1);
        }
        else {
            throw new Error(`Couldn't find item`);
        }
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        let findedIndex = Extension.getIndexById(this.products, id);
        if (findedIndex == -1)
            throw new Error(`Couldn't find item`);
        return this.products[findedIndex];

    }


    createSaleHistory(saleHistory: SaleHistory): void {
        this.saleHistory.push(saleHistory);
    }
    updateSaleHistory(saleHistory: SaleHistory): SaleHistory {
        let findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id");

        if (findedIndex != -1) {
            this.saleHistory[findedIndex].personId = saleHistory.personId;
            this.saleHistory[findedIndex].praductPrice = saleHistory.praductPrice;
            this.saleHistory[findedIndex].productId = saleHistory.productId;
        }
        else {
            throw new Error(`Couldn't find item`);
        }
        return this.saleHistory[findedIndex];
    }
    deleteSaleHistory(saleHistory: SaleHistory): void {
        let findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id");
        if (findedIndex != -1) {
            this.saleHistory.splice(findedIndex, 1);
        }
        else {
            throw new Error(`Couldn't find item`);
        }
    }
    getSaleHistories(): SaleHistory[] {
        return this.saleHistory;
    }
    getSaleHistory(id: number): SaleHistory {
        let findedIndex = Extension.getIndexById(this.saleHistory, id);
        if (findedIndex == -1)
            throw new Error(`Couldn't find item`);
        return this.saleHistory[findedIndex];
    }

    
    createPerson(person: Person): void {
        this.people.push(person);
    }
    updatePerson(person: Person): Person {
        let findedIndex = Extension.getIndex(this.people, person, "id");

        if (findedIndex != -1) {
            this.people[findedIndex].name = person.name;
        }
        else {
            throw new Error(`Couldn't find item`);
        }
        return this.people[findedIndex];
    }
    deletePerson(person: Person): void {
        let findedIndex = Extension.getIndex(this.people, person, "id");
        if (findedIndex != -1) {
            this.people.splice(findedIndex, 1);
        }
        else {
            throw new Error(`Couldn't find item`);
        }
    }
    getPeople(): Person[] {
        return this.people;
    }
    getPerson(id: number): Person {
        let findedIndex = Extension.getIndexById(this.people, id);
        if (findedIndex == -1)
            throw new Error(`Couldn't find item`);
        return this.people[findedIndex];
    }

}

export { InMemoryDb }



