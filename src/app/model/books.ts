import { Categories } from "./categories";
import { Profiles } from "./profiles";
import { Publishers } from "./publishers";

export class Books {
    id: number;
    bookCode: string;
    bookName: string;
    bookPublish: number;
    bookPrice: number;
    bookCategory: Categories;
    bookPublisher: Publishers;
    profileId: Profiles;
}