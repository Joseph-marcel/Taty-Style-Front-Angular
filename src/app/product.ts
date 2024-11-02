import { Margin } from "./margin";
import { ProductStatus } from "./product-status";
import { StockOperation } from "./stock-operation";

export class Product {
    pdtId: number;
    designation: string;
    inStockPrice: number;
    outStockPrice: number;
    status: ProductStatus.INDISPONIBLE;
    totalBenefit: number;
    stockOperations: StockOperation[];
    margins: Margin[];
}
