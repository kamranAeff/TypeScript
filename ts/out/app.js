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
db.createCategory(new Category(1, "Category Name - 1", 'Category Subname - 1'));
db.createCategory(new Category(2, "Category Name - 2", 'Category Subname - 2'));
var product1 = new Product(1, 'Product-1');
product1.setPrice(20);
product1.setCategory(db.getCategory(1));
db.createProduct(product1);
var product2 = new Product(2, 'Product-2');
product2.setPrice(22.5);
product2.setCategory(db.getCategory(1));
db.createProduct(product2);
var product3 = new Product(3, 'Product-3');
product3.setPrice(29.50);
product3.setCategory(db.getCategory(2));
db.createProduct(product3);
db.createSaleHistory(new SaleHistory(1, 1, 20, 1, new Date('2018-01-01T12:30:00')));
db.createSaleHistory(new SaleHistory(2, 1, 22, 1, new Date('2018-01-03T12:30:00')));
db.createSaleHistory(new SaleHistory(3, 1, 25, 1, new Date('2018-01-21T12:30:00')));
db.createSaleHistory(new SaleHistory(4, 1, 12, 1, new Date('2018-02-01T12:30:00')));
db.createSaleHistory(new SaleHistory(5, 1, 18, 1, new Date('2018-03-03T12:30:00')));
db.createSaleHistory(new SaleHistory(6, 1, 20, 1, new Date('2018-04-21T12:30:00')));
db.createSaleHistory(new SaleHistory(7, 2, 15, 1, new Date('2018-01-01T12:30:00')));
db.createSaleHistory(new SaleHistory(8, 2, 20, 1, new Date('2018-01-19T12:30:00')));
db.createSaleHistory(new SaleHistory(8, 2, 20, 1, new Date('2018-01-12T12:30:00')));
db.createSaleHistory(new SaleHistory(9, 3, 5, 1, new Date('2018-01-12T12:30:00')));
function compareSaleHistory(a, b) { if (a.date < b.date) {
    return -1;
} if (a.date > b.date) {
    return 1;
} return 0; }
function dFormat(d) { return Extension.formatString(d.getFullYear().toString(), "0000") + "." + Extension.formatString((d.getMonth() + 1).toString(), "00") + "." + Extension.formatString((d.getDate()).toString(), "00") + " " + Extension.formatString((d.getHours()).toString(), "00") + ":" + Extension.formatString((d.getMinutes()).toString(), "00") + ":" + Extension.formatString((d.getSeconds()).toString(), "00"); }
var chartRepo = { labels: Extension.distinctSimple(db.saleHistory.sort(compareSaleHistory).map(function (s) { return dFormat(s.date); })), yAxes: [], datasets: new Array() };
var distinctProduct = Extension.distinct(db.saleHistory.sort(compareSaleHistory).map(function (e) { return { id: e.productId, label: db.getProduct(e.productId).name }; }));
distinctProduct.forEach(function (p) { /* product */ var r = Extension.getRndInt(0, 255), g = Extension.getRndInt(0, 255), b = Extension.getRndInt(0, 255); var ds = new DataSet(p.label, 1, "y-" + p.id, "rgba(" + r + "," + g + "," + b + ",.3)", "rgb(" + r + "," + g + "," + b + ")"); chartRepo.labels.forEach(function (l) { /* tarixler */ var val = db.saleHistory.filter(function (current, index, self) { return current.productId == p.id && dFormat(current.date) == l; })[0] || { praductPrice: 0 }; ds.data.push(val.praductPrice); }); chartRepo.yAxes.push({ id: "y-" + p.id }); chartRepo.datasets.push(ds); });
