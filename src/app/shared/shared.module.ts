import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSnackBarModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule
} from '@angular/material';

import { CanClickDirective } from './directives/can-click.directive';
import { JoinPipe } from './pipes/join.pipe';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { IntegerValidatorDirective } from './input-integer/integer.validator.directive';
import { ModalComponent } from './modal/modal.component';
import { HostElementService } from './modal/host/host-element.service';
import { InputFloatDirective } from './input-float/input-float.directive';
import { InputFloatComponent } from './input-float/input-float.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: [
    CanClickDirective,
    InputIntegerComponent,
    IntegerValidatorDirective,
    JoinPipe,
    ModalComponent,
    InputFloatDirective,
    InputFloatComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputIntegerComponent,
    IntegerValidatorDirective,
    InputFloatDirective,
    InputFloatComponent,
    JoinPipe,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressBarModule,
    CanClickDirective
  ],
  providers: [HostElementService],
  entryComponents: [ModalComponent]
})
export class SharedModule {}
