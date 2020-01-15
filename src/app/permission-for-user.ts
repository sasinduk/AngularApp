import { IFunctionalArea } from './functional-area';
import { IDocumentType } from './document-type';

export interface IPermissionForUser {
    id: number,
    functionalArea: IFunctionalArea,
    documentType: IDocumentType,
    actionCode: string
}