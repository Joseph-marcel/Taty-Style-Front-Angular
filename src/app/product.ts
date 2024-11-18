import { ProductStatus } from "./product-status";


export class Product {
    pdtId: number;
    designation: string;
    inStockPrice: number;
    outStockPrice: number;
    recordDate:Date;
    status: ProductStatus.INDISPONIBLE;
    totalBenefit: number;
    currentPage:number;
    size:number;
    totalPages:number;
}
