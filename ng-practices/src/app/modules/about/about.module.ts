import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContainerComponent } from './containers/about-container/about-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AboutContainerComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
