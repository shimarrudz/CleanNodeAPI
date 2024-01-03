import { type AccountModel, type AddAccountModel } from '../controllers/sign-up/signup-protocols'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
