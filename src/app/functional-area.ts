import { IFinanceCompany } from './finance-company';

export interface IFunctionalArea {
    id: string,
    financeCompany: IFinanceCompany,
    description: string
}