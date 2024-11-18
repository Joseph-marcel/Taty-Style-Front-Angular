import { OperationType } from "./operation-type";

export class StockOperation {
    operationNumber: number;
    dateOperation: Date;
    amount: number;
    quantity: number;
    type: OperationType;
}
