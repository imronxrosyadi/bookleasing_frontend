import { Genders } from "./genders";
import { Profiles } from "./profiles";

export class Customers {

    id: number;
    custCode: string;
    custName: string;
    custEmail: string;
    custPhone: string;
    custAddress: string;
    genderId: Genders;
    profileId: Profiles;

}