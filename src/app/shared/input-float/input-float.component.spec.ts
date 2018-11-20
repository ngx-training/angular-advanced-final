import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFloatComponent } from './input-float.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('InputFloatComponent', () => {
  let component: InputFloatComponent;
  let fixture: ComponentFixture<InputFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatInputModule, NoopAnimationsModule],
      declarations: [ InputFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
