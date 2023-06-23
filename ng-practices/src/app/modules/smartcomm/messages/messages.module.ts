import { NgModule } from '@angular/core';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesContainerComponent } from './containers/messages-container/messages-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MessagesChatComponent } from './components/messages-chat/messages-chat.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';


@NgModule({
  declarations: [
    MessagesContainerComponent,
    MessagesChatComponent,
    MessagesListComponent
  ],
  imports: [
    SharedModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
