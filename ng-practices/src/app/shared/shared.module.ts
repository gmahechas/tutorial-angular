import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { SharedToolbarComponent } from './components/shared-toolbar/shared-toolbar.component';
import { SharedButtonComponent } from './components/shared-button/shared-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SharedToolbarComponent,
    SharedButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    SharedToolbarComponent,
    SharedButtonComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
