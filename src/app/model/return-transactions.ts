import { Payments } from "./payments";
import { Profiles } from "./profiles";
import { TransactionDetails } from "./transaction-details";

export class ReturnTransactions {
    id: number;
    borrowDone: string;
    borrowLatePrice: number;
    returnPrice: number;
    trDetailId: TransactionDetails;
    payId: Payments;
    profileId: Profiles;
}