/* Developed by Kamran A-eff */class Category { id: number; name: string; subName: string; constructor(id: number, name: string, subName: string) { this.id = id; this.name = name; this.subName = subName; } } class DataSet { label: string; data: number[]; backgroundColor: string; borderColor: string; borderWidth: number; yAxisID: string; constructor(label: string, border: number, yAxisID: string, bgColor: string, borderColor: string) { this.label = label; this.borderWidth = border; this.data = []; this.backgroundColor = bgColor; this.borderColor = borderColor; /*  this.yAxisID = yAxisID; */    }  } interface Array<T> { sort(arg0: (a: any, b: any) => 1 | -1 | 0): T[]; order<T>(this: T[], selector: string): Array<T>; } Array.prototype.order = function <T>(selector: string) { var that = this as Array<T>; return that.sort(function(a, b) { if (a[selector] < b[selector]) { return -1; } if (a[selector] > b[selector]) { return 1; } return 0; });  }; function compareSaleHistory(a, b) { if (a.date < b.date) { return -1; } if (a.date > b.date) { return 1; } return 0; } class Extension { static getIndex<T>(arr: T[], item: T, key: string): number { for (let index = 0; index < arr.length; index++) { const element = arr[index]; if (element[key] == item[key]) { return index; } } return -1; } static getIndexById<T>(arr: T[], id: number): number { for (let index = 0; index < arr.length; index++) { const element = arr[index]; if (element['id'] == id) { return index; } } return -1; } static getRndInt(min, max) { return Math.floor(Math.random() * (max - min)) + min; } static formatString(val, format) { val = format.substr(0, format.length - val.length) + val; return val; } static distinct<T>(arr: T[], key: string = "id") { return arr.filter(function (value, index, self) { return Extension.getIndexById(self, value[key]) == index; }); } static distinctSimple<T>(arr: T[]) { return arr.filter(function (value, index, self) { return self.indexOf(value) == index; }); }  }  interface ICategory { createCategory(category: Category): void; updateCategory(category: Category): Category; deleteCategory(category: Category): void; getCategories(): Category[]; getCategory(id:number):Category; }  class InMemoryDb implements ICategory, IProduct, ISaleHistory, IPerson { categories: Category[]; products: Product[]; people: Person[]; saleHistory: SaleHistory[]; constructor() { this.categories = new Array<Category>(); this.products = new Array<Product>(); this.people = new Array<Person>(); this.saleHistory = new Array<SaleHistory>(); } createCategory(category: Category): void { this.categories.push(category); } updateCategory(category: Category): Category { let findedIndex = Extension.getIndex(this.categories, category, "id"); if (findedIndex != -1) { this.categories[findedIndex].name = category.name; this.categories[findedIndex].subName = category.subName; } else { throw new Error(`Couldn't find item`); } return this.categories[findedIndex]; } deleteCategory(category: Category): void { let findedIndex = Extension.getIndex(this.categories, category, "id"); if (findedIndex != -1) { this.categories.splice(findedIndex, 1); } else { throw new Error(`Couldn't find item`); } } getCategories(): Category[] { return this.categories; } getCategory(id: number): Category { let findedIndex = Extension.getIndexById(this.categories, id); if (findedIndex == -1) throw new Error(`Couldn't find item`); return this.categories[findedIndex]; } createProduct(product: Product): void { this.products.push(product); } updateProduct(product: Product): Product { let findedIndex = Extension.getIndex(this.products, product, "id"); if (findedIndex != -1) { this.products[findedIndex].name = product.name; this.products[findedIndex].description = product.description; } else { throw new Error(`Couldn't find item`); } return this.products[findedIndex]; } deleteProduct(product: Product): void { let findedIndex = Extension.getIndex(this.products, product, "id"); if (findedIndex != -1) { this.products.splice(findedIndex, 1); } else { throw new Error(`Couldn't find item`); } } getProducts(): Product[] { return this.products; } getProduct(id: number): Product { let findedIndex = Extension.getIndexById(this.products, id); if (findedIndex == -1) throw new Error(`Couldn't find item`); return this.products[findedIndex]; } createSaleHistory(saleHistory: SaleHistory): void { this.saleHistory.push(saleHistory); } updateSaleHistory(saleHistory: SaleHistory): SaleHistory { let findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id"); if (findedIndex != -1) { this.saleHistory[findedIndex].personId = saleHistory.personId; this.saleHistory[findedIndex].praductPrice = saleHistory.praductPrice; this.saleHistory[findedIndex].productId = saleHistory.productId; } else { throw new Error(`Couldn't find item`); } return this.saleHistory[findedIndex]; } deleteSaleHistory(saleHistory: SaleHistory): void { let findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id"); if (findedIndex != -1) { this.saleHistory.splice(findedIndex, 1); } else { throw new Error(`Couldn't find item`); } } getSaleHistories(): SaleHistory[] { return this.saleHistory; } getSaleHistory(id: number): SaleHistory { let findedIndex = Extension.getIndexById(this.saleHistory, id); if (findedIndex == -1) throw new Error(`Couldn't find item`); return this.saleHistory[findedIndex]; } createPerson(person: Person): void { this.people.push(person); } updatePerson(person: Person): Person { let findedIndex = Extension.getIndex(this.people, person, "id"); if (findedIndex != -1) { this.people[findedIndex].name = person.name; } else { throw new Error(`Couldn't find item`); } return this.people[findedIndex]; } deletePerson(person: Person): void { let findedIndex = Extension.getIndex(this.people, person, "id"); if (findedIndex != -1) { this.people.splice(findedIndex, 1); } else { throw new Error(`Couldn't find item`); } } getPeople(): Person[] { return this.people; } getPerson(id: number): Person { let findedIndex = Extension.getIndexById(this.people, id); if (findedIndex == -1) throw new Error(`Couldn't find item`); return this.people[findedIndex]; } }  interface IPerson { createPerson(person: Person): void; updatePerson(person: Person): Person; deletePerson(person: Person): void; getPeople(): Person[]; getPerson(id:number):Person;  }  interface IProduct { createProduct(Product: Product): void; updateProduct(Product: Product): Product; deleteProduct(Product: Product): void; getProducts(): Product[]; getProduct(id:number):Product; }  interface ISaleHistory { createSaleHistory(saleHistory: SaleHistory): void; updateSaleHistory(saleHistory: SaleHistory): SaleHistory; deleteSaleHistory(saleHistory: SaleHistory): void; getSaleHistories(): SaleHistory[]; getSaleHistory(id: number): SaleHistory; } class Person { id: number; name: string; constructor(id: number, name: string) { this.id = id; this.name = name; } }  class Product { id: number; name: string; description: string; category: Category; price: number; constructor(id: number, name: string) { this.id = id; this.name = name; } setCategory(category: Category) { this.category = category; } setPrice(price: number) { this.price = price; } } class SaleHistory { id: number; productId: number; praductPrice: number; personId: number; date:Date; /** * */ constructor(id: number,productId: number,praductPrice: number,personId: number,date:Date) { this.id=id; this.productId=productId; this.praductPrice=praductPrice; this.personId=personId; this.date=date; } }  /* using */ let db = new InMemoryDb(); 