export interface ProductI {
    pdtId:              number;
    designation:        string;
    inStockPrice:       number;
    outStockPrice:      number;
    status:             string;
    totalBenefit:       number;
    currentPage:        number;
    totalPages:         number;
    size:               number;
    stockOperationDtos: StockOperation[];
    marginsDto:         Margins[];
}

export interface Margins {
    marginId: number;
    amount:   number;
    saleDate: Date;
    quantity: number;
}

export interface StockOperation {
    operationNumber: number;
    dateOperation:   Date;
    amount:          number;
    quantity:        number;
    type:            string;
}
