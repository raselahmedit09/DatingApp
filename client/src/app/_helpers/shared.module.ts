import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
];

const formModules = [
  FormsModule,
  ReactiveFormsModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules,
    formModules,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [
    CommonModule,
    materialModules,
    ToastrModule,
    formModules,
  ],
})
export class SharedModule { }
