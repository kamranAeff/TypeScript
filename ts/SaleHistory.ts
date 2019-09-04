class SaleHistory {
    id: number;
    productId: number;
    praductPrice: number;
    personId: number;
    date:Date;


    /**
     *
     */
    constructor(id: number,productId: number,praductPrice: number,personId: number,date:Date) {
        this.id=id;
        this.productId=productId;
        this.praductPrice=praductPrice;
        this.personId=personId;
        this.date=date;
    }
}

export { SaleHistory }