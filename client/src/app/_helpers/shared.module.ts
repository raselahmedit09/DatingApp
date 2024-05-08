import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dateFormatPipe } from './custom.pipes';
import { GalleryModule } from 'ng-gallery';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';


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
    formModules,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    })
  ],
  exports: [
    CommonModule,
    ToastrModule,
    formModules,
    customPipes,
    GalleryModule,
    BsDropdownModule,
    TabsModule,
  ],
})
export class SharedModule { }
