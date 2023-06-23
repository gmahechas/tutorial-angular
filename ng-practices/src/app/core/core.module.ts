import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { CoreContainerComponent } from './containers/core-container/core-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoreContainerComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
