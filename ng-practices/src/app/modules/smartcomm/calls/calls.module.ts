import { NgModule } from '@angular/core';

import { CallsRoutingModule } from './calls-routing.module';
import { CallsContainerComponent } from './containers/calls-container/calls-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CallsContainerComponent
  ],
  imports: [
    SharedModule,
    CallsRoutingModule
  ]
})
export class CallsModule { }
