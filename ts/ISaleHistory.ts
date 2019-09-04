import { SaleHistory } from "./SaleHistory";

interface ISaleHistory {
    createSaleHistory(saleHistory: SaleHistory): void;
    updateSaleHistory(saleHistory: SaleHistory): SaleHistory;
    deleteSaleHistory(saleHistory: SaleHistory): void;
    getSaleHistories(): SaleHistory[];
    getSaleHistory(id: number): SaleHistory;
}


export { ISaleHistory }