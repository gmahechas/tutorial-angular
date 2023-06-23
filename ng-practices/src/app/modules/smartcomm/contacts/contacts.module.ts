import { NgModule } from '@angular/core';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsContainerComponent } from './containers/contacts-container/contacts-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactsContainerComponent
  ],
  imports: [
    SharedModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
