import { Authors } from "./authors";
import { Books } from "./books";
import { Languages } from "./language";
import { Profiles } from "./profiles";
import { Racks } from "./racks";

export class BookDetails {
    id: number;
    bookId: Books;
    bookDtlCode: string;
    authorId: Authors;
    languageId: Languages;
    rackId: Racks;
    profileId: Profiles;
}