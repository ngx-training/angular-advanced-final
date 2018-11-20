import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer.model';
import { switchMap, filter, takeUntil } from 'rxjs/operators';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/reducers/customer.reducer';
import {
  SelectCustomer,
  AddCustomer,
  UpdateCustomer
} from '../store/actions/customer.actions';
import {
  getSelectedCustomer,
  getSelectedCustomerFromRouter
} from '../store/selectors/customer.selectors';
import { Subject } from 'rxjs';
import { Go } from '../../core/router/router.actions';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private store: Store<CustomerState>
  ) {}

  ngOnInit() {
    this.form = Customer.toFormGroup();

    this.store
      // .select(getSelectedCustomer)
      .select(getSelectedCustomerFromRouter)
      .pipe(
        filter(customer => !!customer),
        takeUntil(this.destroy$)
      )
      .subscribe(customer => {
        this.form.patchValue(customer);
      });

    // const id = this.route.snapshot.params.id;

    // if (id !== 'new') {
    //   this.store.dispatch(new SelectCustomer(parseInt(id, 10)));
    // }
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  submit() {
    const data = this.form.getRawValue();
    this.store.dispatch(
      data.id ? new UpdateCustomer(data) : new AddCustomer(data)
    );
  }

  cancel() {
    // this.router.navigate(['customers']);
    this.store.dispatch(new Go({ path: ['customers'] }));
  }
}
