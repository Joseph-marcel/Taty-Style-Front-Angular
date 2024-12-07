export interface StockPage {
    page:       number;
    size:       number;
    totalPages: number;
    stockDtos:  StockDto[];
}

export interface StockDto {
    reference:           string;
    title:               string;
    dateExistant:        Date;
    niveauStock:         number;
    lastOperationStatus: string;
}
