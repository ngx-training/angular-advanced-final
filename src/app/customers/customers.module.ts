import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCustomer from './store/reducers/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/effects/customer.effects';
import { CustomerStatusPipe } from './customer-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
    StoreModule.forFeature('customer', fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ],
  declarations: [
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerStatusPipe
  ]
})
export class CustomersModule { }
