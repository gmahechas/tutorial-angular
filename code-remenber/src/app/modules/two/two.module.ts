import { NgModule } from '@angular/core';

import * as fromContainers from './containers';

import { SharedModule } from '@myapp/app/shared/shared.module';
import { TwoRoutingModule } from './two-routing.module';

@NgModule({
  declarations: [
    ...fromContainers.containers
  ],
  imports: [
    SharedModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
