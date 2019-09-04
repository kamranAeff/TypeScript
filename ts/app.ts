import { Product } from "./Product";
import { InMemoryDb } from "./InMemoryDb";
import { Category } from "./Category";
import { SaleHistory } from "./SaleHistory";
import { DataSet } from "./DataSet";
import { Extension } from "./Extension";

//using

let db = new InMemoryDb();
db.createCategory(new Category(1, "Category Name - 1", 'Category Subname - 1'));
db.createCategory(new Category(2, "Category Name - 2", 'Category Subname - 2'));

let product1 = new Product(1, 'Product-1');
product1.setPrice(20);
product1.setCategory(db.getCategory(1));

db.createProduct(product1);

let product2 = new Product(2, 'Product-2');
product2.setPrice(22.5);
product2.setCategory(db.getCategory(1));

db.createProduct(product2);

let product3 = new Product(3, 'Product-3');
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


function compareSaleHistory(a, b) {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

function dFormat(d: Date): string {
  return `${Extension.formatString(d.getFullYear().toString(), "0000")}.${Extension.formatString((d.getMonth() + 1).toString(), "00")}.${Extension.formatString((d.getDate()).toString(), "00")} ${Extension.formatString((d.getHours()).toString(), "00")}:${Extension.formatString((d.getMinutes()).toString(), "00")}:${Extension.formatString((d.getSeconds()).toString(), "00")}`
}


let chartRepo = {
  labels: Extension.distinctSimple(db.saleHistory.sort(compareSaleHistory).map(s => dFormat(s.date))),
  yAxes: [],
  datasets: new Array<DataSet>()
};

let distinctProduct = Extension.distinct(db.saleHistory.sort(compareSaleHistory).map(e => {
  return {
    id: e.productId,
    label: db.getProduct(e.productId).name
  }
}));

distinctProduct.forEach(p => {//product
  let r = Extension.getRndInt(0, 255), g = Extension.getRndInt(0, 255), b = Extension.getRndInt(0, 255);
  let ds = new DataSet(p.label, 1, `y-${p.id}`, `rgba(${r},${g},${b},.3)`, `rgb(${r},${g},${b})`);
  chartRepo.labels.forEach(l => {//tarixler
    let val = db.saleHistory.filter(function (current, index, self) {
      return current.productId == p.id && dFormat(current.date) == l;
    })[0] || { praductPrice: 0 };
    ds.data.push(val.praductPrice);
  });
  chartRepo.yAxes.push({ id: `y-${p.id}` });
  chartRepo.datasets.push(ds);
});
