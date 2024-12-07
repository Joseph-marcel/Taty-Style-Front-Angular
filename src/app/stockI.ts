export interface StockI {
    reference:           string;
    title:               string;
    dateExistant:        Date;
    niveauStock:         number;
    lastOperationStatus: string;
    valueStockCredit:    number;
    valueStockDebit:     number;
    currentPage:         number;
    size:                number;
    totalPages:          number;
    stockOperationDtos:  StockOperationDto[];
    balanceDtos:         BalanceDto[];
}

export interface BalanceDto {
    balanceId:   number;
    capital:     number;
    sale:        number;
    result:      number;
    balanceDate: Date;
}

export interface StockOperationDto {
    operationNumber: number;
    dateOperation:   Date;
    amount:          number;
    quantity:        number;
    type:            string;
}