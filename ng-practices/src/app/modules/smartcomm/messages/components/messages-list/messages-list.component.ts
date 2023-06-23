import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessage } from '../../models/messages.interface';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent {

  @Input() messageList: IMessage[] = [];
  @Input() currentMessage: IMessage | null = null;

  @Output() clickOnMessage = new EventEmitter<IMessage>();

  onClick(message: IMessage) {
    this.clickOnMessage.emit(message);
  }
}
