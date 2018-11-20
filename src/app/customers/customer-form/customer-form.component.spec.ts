import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { MatSnackBar } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import { CustomerState, reducer } from '../store/reducers/customer.reducer';

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;

  beforeEach(async(() => {
    const activeRouteDataListener = new Subject();
    const activeRouteParamMapListener = new Subject();
    const activeRouteStub = {
      data: activeRouteDataListener,
      paramMap: activeRouteParamMapListener,
      snapshot: {
        params: {
          id: '10'
        }
      }
    };
    let store: Store<CustomerState>;

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          customer: reducer
        })
      ],
      declarations: [CustomerFormComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activeRouteStub },
        { provide: Router, useValue: {} },
        { provide: CustomerService, useValue: {} },
        { provide: MatSnackBar, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
