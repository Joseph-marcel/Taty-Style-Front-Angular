export interface ProductI {
    pdtId:              number;
    designation:        string;
    inStockPrice:       number;
    outStockPrice:      number;
    status:             string;
    totalBenefit:       number;
    size:               number;
    currentPage:        number;
    totalPages:         number;
    stockOperationDtos: StockOperationDto[];
    marginsDto:         MarginsDto[];
}

export interface MarginsDto {
    marginId: number;
    amount:   number;
    saleDate: Date;
    quantity: number;
}

export interface StockOperationDto {
    operationNumber: number;
    dateOperation:   Date;
    amount:          number;
    quantity:        number;
    type:            string;
}