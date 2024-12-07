import { OperationType } from "./operation-type";

export interface StockOperation {
    operationNumber: number;
    dateOperation: Date;
    amount: number;
    quantity: number;
    type: OperationType;
}
