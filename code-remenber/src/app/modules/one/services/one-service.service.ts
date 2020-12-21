import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

interface ITodo {
  id: string;
  todo: string;
}

@Injectable({
  providedIn: 'root'
})
export class OneServiceService {

  private todoSubject = new BehaviorSubject<ITodo[]>([{ id: '1', todo: 'Todo One' }]);
  public readonly todos: Observable<ITodo[]> = this.todoSubject.asObservable();

  constructor() { }

  addTodo(newTodo: ITodo): void {
    console.log(newTodo);
    const oldTodos = this.todoSubject.getValue();
    const newTodos = [...oldTodos, newTodo];
    this.todoSubject.next(newTodos);
  }
}
