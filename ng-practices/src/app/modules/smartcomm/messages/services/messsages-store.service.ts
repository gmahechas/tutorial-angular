import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessagesState, messagesInitialState } from '../models/messages-store';
import { MesssagesService } from './messsages.service';
import { IMessage } from '../models/messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MesssagesStoreService {

  private messagesSubject = new BehaviorSubject<MessagesState>(messagesInitialState);
  public readonly messagesStore: Observable<MessagesState> = this.messagesSubject.asObservable();

  constructor(
    private messagesService: MesssagesService,
  ) { }

  public setMessagesFromApi(): void {
    this.messagesService.getMessages().subscribe(messages => {
      console.log(messages);
      const currentState = this.messagesSubject.getValue();
      const newState = Object.assign({}, { ...currentState, messages });
      this.messagesSubject.next(newState);
    });
  }

    public setCurrentMessage(message: IMessage): void {
      const currentState = this.messagesSubject.getValue();
      const newState = Object.assign({}, { ...currentState, currentMessage: message });
      this.messagesSubject.next(newState);
  }


  public justForTest() {
    const currentState = this.messagesSubject.getValue();
    const messages = [...currentState.messages];
    messages[0] = { ...messages[0], title: 'este es el mensaje' };
    const newState = Object.assign({}, { ...currentState, messages });
    this.messagesSubject.next(newState);
  }
}
