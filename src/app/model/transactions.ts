import { Customers } from "./customers";
import { Payments } from "./payments";
import { Profiles } from "./profiles";

export class Transactions {

    id: number;
    borrowStart: string;
    borrowReceipt: string;
    totalPrice: number;
    customerId: Customers;
    paymentId: Payments;
    profileId: Profiles;

}