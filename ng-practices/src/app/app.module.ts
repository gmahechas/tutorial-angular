import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreContainerComponent } from './core/containers/core-container/core-container.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [CoreContainerComponent]
})
export class AppModule { }
