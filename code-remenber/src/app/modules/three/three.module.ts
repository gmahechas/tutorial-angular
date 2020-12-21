import { NgModule } from '@angular/core';

import * as fromContainers from './containers';

import { SharedModule } from '@myapp/app/shared/shared.module';
import { ThreeRoutingModule } from './three-routing.module';

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    SharedModule,
    ThreeRoutingModule
  ]
})
export class ThreeModule { }
