import { NgModule } from '@angular/core';

import * as fromContainers from './containers';

import { SharedModule } from '@myapp/app/shared/shared.module';
import { OneRoutingModule } from './one-routing.module';

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    SharedModule,
    OneRoutingModule
  ]
})
export class OneModule { }
