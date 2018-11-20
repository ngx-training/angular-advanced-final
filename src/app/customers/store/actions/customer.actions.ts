import { Action } from '@ngrx/store';
import { Customer } from '../../customer.model';

export enum CustomerActionTypes {
  LoadCustomers = '[Customer] Load Customers',
  LoadCustomersSuccess = '[Customer] Load customers success',
  LoadCustomersFail = '[Customer] Load customers fail',
  SelectCustomer = '[Customer] Select customer',
  AddCustomer = '[Customer] Add customer',
  AddCustomerSuccess = '[Customer] Add customer success',
  AddCustomerFail = '[Customer] Add customer fail',
  UpdateCustomer = '[Customer] Update customer',
  UpdateCustomerSuccess = '[Customer] Update customer success',
  UpdateCustomerFail = '[Customer] Update customer fail',
  DeleteCustomer = '[Customer] Delete customer',
  DeleteCustomerSuccess = '[Customer] Delete customer success',
  DeleteCustomerFail = '[Customer] Delete customer fail',
  SearchCustomer = '[Customer] Search customer'
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LoadCustomers;
}

export class LoadCustomersSuccess implements Action {
  readonly type = CustomerActionTypes.LoadCustomersSuccess;
  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements Action {
  readonly type = CustomerActionTypes.LoadCustomersFail;
  constructor(public payload: any) {}
}

export class SelectCustomer implements Action {
  readonly type = CustomerActionTypes.SelectCustomer;
  constructor(public payload: number) {}
}

export class AddCustomer implements Action {
  readonly type = CustomerActionTypes.AddCustomer;
  constructor(public payload: Customer) {}
}

export class AddCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.AddCustomerSuccess;
  constructor(public payload: Customer) {}
}

export class AddCustomerFail implements Action {
  readonly type = CustomerActionTypes.AddCustomerFail;
  constructor(public payload: any) {}
}

export class UpdateCustomer implements Action {
  readonly type = CustomerActionTypes.UpdateCustomer;
  constructor(public payload: Customer) {}
}

export class UpdateCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerSuccess;
  constructor(public payload: Customer) {}
}

export class UpdateCustomerFail implements Action {
  readonly type = CustomerActionTypes.UpdateCustomerFail;
  constructor(public payload: any) {}
}

export class DeleteCustomer implements Action {
  readonly type = CustomerActionTypes.DeleteCustomer;
  constructor(public payload: number) {}
}

export class DeleteCustomerSuccess implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerSuccess;
  constructor(public payload: number) {}
}

export class DeleteCustomerFail implements Action {
  readonly type = CustomerActionTypes.DeleteCustomerFail;
  constructor(public payload: any) {}
}

export class SearchCustomer implements Action {
  readonly type = CustomerActionTypes.SearchCustomer;
  constructor(public payload: string) {}
}

export type CustomerActions =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail
  | SelectCustomer
  | AddCustomer
  | AddCustomerSuccess
  | AddCustomerFail
  | UpdateCustomer
  | UpdateCustomerSuccess
  | UpdateCustomerFail
  | DeleteCustomer
  | DeleteCustomerSuccess
  | DeleteCustomerFail
  | SearchCustomer;
