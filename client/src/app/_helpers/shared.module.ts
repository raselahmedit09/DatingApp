import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { dateFormatPipe } from './custom.pipes';
import { GalleryModule } from 'ng-gallery';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxSpinnerModule } from 'ngx-spinner';


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
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxSpinnerModule.forRoot({
      type: 'line-scale-party'
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
    NgxSpinnerModule,
  ],
})
export class SharedModule { }
