export interface Invoice {
    currentPage: number;
    totalPages:  number;
    pageSize:    number;
    billDtos:    BillDto[];
}

export interface BillDto {
    billId:      string;
    cost:        number;
    deposit:     number;
    refund:      number;
    billDate:    Date;
    customerDto: null;
    packDto:     null;
}