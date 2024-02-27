import { type AccountModel, type AddAccountModel } from '../controllers/login2/sign-up/signup-controller-protocols'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
