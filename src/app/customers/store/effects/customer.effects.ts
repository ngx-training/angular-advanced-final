import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerService } from '../../customer.service';
import { switchMap, catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromActions from '../actions/customer.actions';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Go } from '../../../core/router/router.actions';
import { ModalService } from '../../../shared/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerEffects {
  /*
   * load or search all customers list and dispatch LoadCustomersSuccess action
   */
  @Effect()
  loadCustomers$ = this.actions$.pipe(
    ofType(
      fromActions.CustomerActionTypes.LoadCustomers,
      fromActions.CustomerActionTypes.SearchCustomer
    ),
    map((action: any) => action.payload),
    switchMap(search => {
      return this.customerService.getAll(search).pipe(
        map(customers => new fromActions.LoadCustomersSuccess(customers)),
        catchError(err => of(new fromActions.LoadCustomersFail(err)))
      );
    })
  );

  /*
   * add a new customer
   */
  @Effect()
  addCustomers$ = this.actions$.pipe(
    ofType(fromActions.CustomerActionTypes.AddCustomer),
    map((action: fromActions.AddCustomer) => action.payload),
    concatMap(customer =>
      this.customerService.create(customer).pipe(
        map(newCustomer => new fromActions.AddCustomerSuccess(newCustomer)),
        catchError(err => of(new fromActions.AddCustomerFail(err)))
      )
    )
  );

  /*
   * update a customer
   */
  @Effect()
  updateCustomers$ = this.actions$.pipe(
    ofType(fromActions.CustomerActionTypes.UpdateCustomer),
    map((action: fromActions.UpdateCustomer) => action.payload),
    concatMap(customer =>
      this.customerService.update(customer).pipe(
        map(newCustomer => new fromActions.UpdateCustomerSuccess(newCustomer)),
        catchError(err => of(new fromActions.UpdateCustomerFail(err)))
      )
    )
  );

  /*
   * delete a customer
   */
  @Effect()
  deleteCustomers$ = this.actions$.pipe(
    ofType(fromActions.CustomerActionTypes.DeleteCustomer),
    map((action: fromActions.DeleteCustomer) => action.payload),
    concatMap(id =>
      this.customerService.delete(id).pipe(
        map(_ => new fromActions.DeleteCustomerSuccess(id)),
        catchError(err => of(new fromActions.DeleteCustomerFail(err)))
      )
    )
  );

  /*
   * save customer success
   */
  @Effect()
  saveCustomersSuccess$ = this.actions$.pipe(
    ofType(
      fromActions.CustomerActionTypes.AddCustomerSuccess,
      fromActions.CustomerActionTypes.UpdateCustomerSuccess
    ),
    map(
      (action: fromActions.AddCustomerSuccess | fromActions.UpdateCustomer) =>
        action.payload
    ),
    tap(customer => {
      this.snackBar.open(`Customer ${customer.name} saved successfully.`, '', {
        duration: 2000
      });
    }),
    map(
      _ =>
        new Go({
          path: ['/customers']
        })
    )
  );

  /*
   * error handler
   */
  @Effect({ dispatch: false })
  errors$ = this.actions$.pipe(
    ofType(
      fromActions.CustomerActionTypes.LoadCustomersFail,
      fromActions.CustomerActionTypes.AddCustomerFail,
      fromActions.CustomerActionTypes.DeleteCustomerFail,
      fromActions.CustomerActionTypes.UpdateCustomerFail
    ),
    map((action: any) => action.payload),
    switchMap(error => {
      console.log('error', error);

      return this.modalService.openGlobal({
        title: 'App error',
        message: error && error.message || 'The error message',
        type: 'warn'
      });
    })
  );

  constructor(
    private actions$: Actions,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private modalService: ModalService
  ) {}
}
