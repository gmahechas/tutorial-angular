import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@myapp/app/shared/shared.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class CoreModule { }
