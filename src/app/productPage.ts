export interface ProductPage {
    page:        number;
    size:        number;
    totalPages:  number;
    productDtos: Product[];
}

export interface Product {
    pdtId:              number;
    designation:        string;
    inStockPrice:       number;
    outStockPrice:      number;
    status:             string;
}
