import { BookDetails } from "./bookdetails";
import { Transactions } from "./transactions";

export class TransactionDetails {
    id: number;
    borrowDtlCode: string;
    borrowEnd: string;
    transactionId: Transactions;
    bookDtlId: BookDetails;
}