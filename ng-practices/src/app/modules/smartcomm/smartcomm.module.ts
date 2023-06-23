import { NgModule } from '@angular/core';

import { SmartcommRoutingModule } from './smartcomm-routing.module';
import { SmartcommContainerComponent } from './containers/smartcomm-container/smartcomm-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SmartcommContainerComponent
  ],
  imports: [
    SharedModule,
    SmartcommRoutingModule
  ]
})
export class SmartcommModule { }
