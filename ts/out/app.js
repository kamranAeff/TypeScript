/* Developed by Kamran A-eff */ var Category = /** @class */ (function () {
    function Category(id, name, subName) {
        this.id = id;
        this.name = name;
        this.subName = subName;
    }
    return Category;
}());
var DataSet = /** @class */ (function () {
    function DataSet(label, border, yAxisID, bgColor, borderColor) {
        this.label = label;
        this.borderWidth = border;
        this.data = [];
        this.backgroundColor = bgColor;
        this.borderColor = borderColor; /*  this.yAxisID = yAxisID; */
    }
    return DataSet;
}());
Array.prototype.order = function (selector) { var that = this; return that.sort(function (a, b) { if (a[selector] < b[selector]) {
    return -1;
} if (a[selector] > b[selector]) {
    return 1;
} return 0; }); };
function compareSaleHistory(a, b) { if (a.date < b.date) {
    return -1;
} if (a.date > b.date) {
    return 1;
} return 0; }
var Extension = /** @class */ (function () {
    function Extension() {
    }
    Extension.getIndex = function (arr, item, key) { for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (element[key] == item[key]) {
            return index;
        }
    } return -1; };
    Extension.getIndexById = function (arr, id) { for (var index = 0; index < arr.length; index++) {
        var element = arr[index];
        if (element['id'] == id) {
            return index;
        }
    } return -1; };
    Extension.getRndInt = function (min, max) { return Math.floor(Math.random() * (max - min)) + min; };
    Extension.formatString = function (val, format) { val = format.substr(0, format.length - val.length) + val; return val; };
    Extension.distinct = function (arr, key) {
        if (key === void 0) { key = "id"; }
        return arr.filter(function (value, index, self) { return Extension.getIndexById(self, value[key]) == index; });
    };
    Extension.distinctSimple = function (arr) { return arr.filter(function (value, index, self) { return self.indexOf(value) == index; }); };
    return Extension;
}());
var InMemoryDb = /** @class */ (function () {
    function InMemoryDb() {
        this.categories = new Array();
        this.products = new Array();
        this.people = new Array();
        this.saleHistory = new Array();
    }
    InMemoryDb.prototype.createCategory = function (category) { this.categories.push(category); };
    InMemoryDb.prototype.updateCategory = function (category) { var findedIndex = Extension.getIndex(this.categories, category, "id"); if (findedIndex != -1) {
        this.categories[findedIndex].name = category.name;
        this.categories[findedIndex].subName = category.subName;
    }
    else {
        throw new Error("Couldn't find item");
    } return this.categories[findedIndex]; };
    InMemoryDb.prototype.deleteCategory = function (category) { var findedIndex = Extension.getIndex(this.categories, category, "id"); if (findedIndex != -1) {
        this.categories.splice(findedIndex, 1);
    }
    else {
        throw new Error("Couldn't find item");
    } };
    InMemoryDb.prototype.getCategories = function () { return this.categories; };
    InMemoryDb.prototype.getCategory = function (id) { var findedIndex = Extension.getIndexById(this.categories, id); if (findedIndex == -1)
        throw new Error("Couldn't find item"); return this.categories[findedIndex]; };
    InMemoryDb.prototype.createProduct = function (product) { this.products.push(product); };
    InMemoryDb.prototype.updateProduct = function (product) { var findedIndex = Extension.getIndex(this.products, product, "id"); if (findedIndex != -1) {
        this.products[findedIndex].name = product.name;
        this.products[findedIndex].description = product.description;
    }
    else {
        throw new Error("Couldn't find item");
    } return this.products[findedIndex]; };
    InMemoryDb.prototype.deleteProduct = function (product) { var findedIndex = Extension.getIndex(this.products, product, "id"); if (findedIndex != -1) {
        this.products.splice(findedIndex, 1);
    }
    else {
        throw new Error("Couldn't find item");
    } };
    InMemoryDb.prototype.getProducts = function () { return this.products; };
    InMemoryDb.prototype.getProduct = function (id) { var findedIndex = Extension.getIndexById(this.products, id); if (findedIndex == -1)
        throw new Error("Couldn't find item"); return this.products[findedIndex]; };
    InMemoryDb.prototype.createSaleHistory = function (saleHistory) { this.saleHistory.push(saleHistory); };
    InMemoryDb.prototype.updateSaleHistory = function (saleHistory) { var findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id"); if (findedIndex != -1) {
        this.saleHistory[findedIndex].personId = saleHistory.personId;
        this.saleHistory[findedIndex].praductPrice = saleHistory.praductPrice;
        this.saleHistory[findedIndex].productId = saleHistory.productId;
    }
    else {
        throw new Error("Couldn't find item");
    } return this.saleHistory[findedIndex]; };
    InMemoryDb.prototype.deleteSaleHistory = function (saleHistory) { var findedIndex = Extension.getIndex(this.saleHistory, saleHistory, "id"); if (findedIndex != -1) {
        this.saleHistory.splice(findedIndex, 1);
    }
    else {
        throw new Error("Couldn't find item");
    } };
    InMemoryDb.prototype.getSaleHistories = function () { return this.saleHistory; };
    InMemoryDb.prototype.getSaleHistory = function (id) { var findedIndex = Extension.getIndexById(this.saleHistory, id); if (findedIndex == -1)
        throw new Error("Couldn't find item"); return this.saleHistory[findedIndex]; };
    InMemoryDb.prototype.createPerson = function (person) { this.people.push(person); };
    InMemoryDb.prototype.updatePerson = function (person) { var findedIndex = Extension.getIndex(this.people, person, "id"); if (findedIndex != -1) {
        this.people[findedIndex].name = person.name;
    }
    else {
        throw new Error("Couldn't find item");
    } return this.people[findedIndex]; };
    InMemoryDb.prototype.deletePerson = function (person) { var findedIndex = Extension.getIndex(this.people, person, "id"); if (findedIndex != -1) {
        this.people.splice(findedIndex, 1);
    }
    else {
        throw new Error("Couldn't find item");
    } };
    InMemoryDb.prototype.getPeople = function () { return this.people; };
    InMemoryDb.prototype.getPerson = function (id) { var findedIndex = Extension.getIndexById(this.people, id); if (findedIndex == -1)
        throw new Error("Couldn't find item"); return this.people[findedIndex]; };
    return InMemoryDb;
}());
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    return Person;
}());
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    Product.prototype.setCategory = function (category) { this.category = category; };
    Product.prototype.setPrice = function (price) { this.price = price; };
    return Product;
}());
var SaleHistory = /** @class */ (function () {
    function SaleHistory(id, productId, praductPrice, personId, date) {
        this.id = id;
        this.productId = productId;
        this.praductPrice = praductPrice;
        this.personId = personId;
        this.date = date;
    }
    return SaleHistory;
}()); /* using */
var db = new InMemoryDb();
