import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { reducer, CustomerState } from '../store/reducers/customer.reducer';
import { StoreModule, Store } from '@ngrx/store';
import {
  LoadCustomers,
  SearchCustomer,
  LoadCustomersSuccess
} from '../store/actions/customer.actions';

const customerMockData = require('../../../../server/mocks/customers/customers.json');

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let store: Store<CustomerState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          customer: reducer
        })
      ],
      declarations: [CustomerListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    // customerServiceSpy = TestBed.get(CustomerService);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    // init store
    store.dispatch(new LoadCustomersSuccess(customerMockData));

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('GIVEN the component is initialized', () => {
    it('should load all customers after init', done => {
      expect(component).toBeTruthy();

      const expected = new LoadCustomers();
      expect(store.dispatch).toHaveBeenCalledWith(expected);

      component.customers$.subscribe(c => {
        expect(c.length).toBe(3);
        expect(c).toEqual(customerMockData);
        done();
      });
    });

    it('should should load new customers when search input changes', fakeAsync(() => {
      expect(component).toBeTruthy();
      expect(component.searchTerm).toBeDefined();

      component.searchTerm.setValue('Simp');
      const expected = new SearchCustomer('Simp');

      tick(500);

      expect(store.dispatch).toHaveBeenCalledWith(expected);
    }));
  });
});
