import { Component, OnDestroy, OnInit } from '@angular/core';
import { MesssagesStoreService } from '../../services/messsages-store.service';
import { IMessage } from '../../models/messages.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent implements OnInit, OnDestroy {

  messages: IMessage[] = [];
  currentMessage: IMessage | null = null;

  private _subscription = new Subscription();

  constructor(
    private messsagesStoreService: MesssagesStoreService,
  ) {}

  ngOnInit(): void {
    this.messsagesStoreService.setMessagesFromApi();
    this._subscription.add(this.setMessagesLocal());
    this._subscription.add(this.setCurrentMessage());
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();  
  }

  setMessagesLocal(): Subscription {
    return this.messsagesStoreService.messagesStore.subscribe(messagesStore => this.messages = messagesStore.messages)
  }

  setCurrentMessage(): Subscription {
    return this.messsagesStoreService.messagesStore.subscribe(messagesStore => this.currentMessage = messagesStore.currentMessage);
  }

  clickOnMessage(message: IMessage) {
    
    this.messsagesStoreService.setCurrentMessage(message);
  }

  justForTest() {
    this.messsagesStoreService.justForTest();
  }
}
