import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../models/messages.interface';

@Injectable({
  providedIn: 'root'
})
export class MesssagesService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMessages() {
    return this.httpClient.get<IMessage[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
