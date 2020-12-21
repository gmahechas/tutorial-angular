import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { IndexCoreComponent } from '@myapp/app/core/containers/index-core/index-core.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [IndexCoreComponent]
})
export class AppModule { }
