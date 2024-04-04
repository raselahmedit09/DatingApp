import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { dateFormatPipe } from './custom.pipes';


const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
];

const formModules = [
  FormsModule,
  ReactiveFormsModule,
];

const customPipes = [
  dateFormatPipe
];


@NgModule({
  declarations: [
    customPipes,
  ],
  imports: [
    CommonModule,
    materialModules,
    formModules,
    MatTabsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [
    CommonModule,
    materialModules,
    ToastrModule,
    formModules,
    MatTabsModule,
    customPipes,
  ],
})
export class SharedModule { }
