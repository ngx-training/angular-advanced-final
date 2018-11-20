import { Action } from '@ngrx/store';
import {
  CustomerActions,
  CustomerActionTypes
} from '../actions/customer.actions';
import { Customer } from '../../customer.model';

export interface CustomerState {
  loading: boolean;
  loaded: boolean;
  customers: Customer[];
  selectedCustomerId?: number;
  search?: string;
}

export const initialState: CustomerState = {
  loading: false,
  loaded: false,
  customers: []
};

export function reducer(
  state = initialState,
  action: CustomerActions
): CustomerState {
  switch (action.type) {
    case CustomerActionTypes.LoadCustomers:
      return {
        ...state,
        loading: true
      };

    case CustomerActionTypes.LoadCustomersSuccess: {
      const customers = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        selectedCustomerId: null,
        customers
      };
    }

    case CustomerActionTypes.LoadCustomersFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case CustomerActionTypes.SelectCustomer: {
      const selectedCustomerId = action.payload;
      return { ...state, selectedCustomerId };
    }

    case CustomerActionTypes.AddCustomerSuccess: {
      const newCustomer = action.payload;
      const customers = [...state.customers, newCustomer];

      return {
        ...state,
        customers
      };
    }

    case CustomerActionTypes.DeleteCustomerSuccess: {
      const id = action.payload;
      const customers = [...state.customers.filter(c => c.id !== id)];

      return {
        ...state,
        customers
      };
    }

    case CustomerActionTypes.SearchCustomer: {
      const search = action.payload;

      return {
        ...state,
        loading: true,
        search
      };
    }

    default:
      return state;
  }
}
