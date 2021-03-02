import { Genders } from "./genders";
import { Users } from "./users";

export class Profiles {

    id: number;
    profileCode: string;
    profileName: string;
    profileEmail: string;
    profilePhone: string;
    profileAddress: string;
    genderId: Genders;
    userId: Users;

}