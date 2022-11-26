import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './shared/shared.module';

import { IndexCoreComponent } from './modules/core/containers/index-core/index-core.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [IndexCoreComponent],
  entryComponents: []
})
export class AppModule {
}
