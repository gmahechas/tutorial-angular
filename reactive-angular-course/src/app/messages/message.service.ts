import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new BehaviorSubject<string[]>([]);
  errors$: Observable<string[]> = this.subject.asObservable().pipe(filter(messages => messages && messages.length > 0));

  constructor() { }

  showErrors(...errors: string[]) {
    this.subject.next(errors);
  }
}
