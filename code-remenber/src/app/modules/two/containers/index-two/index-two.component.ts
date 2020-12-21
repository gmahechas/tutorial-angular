import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { map } from 'rxjs/operators';

import { OneServiceService } from '@myapp/app/modules/one/services/one-service.service';

@Component({
  selector: 'app-index-two',
  templateUrl: './index-two.component.html',
  styleUrls: ['./index-two.component.scss']
})
export class IndexTwoComponent implements OnInit {

  todo$ = this.oneServiceService.todos.pipe(
    map(data => data)
  );

  formTwo = this.formBuilder.group({
    id: this.formBuilder.control(''),
    todo: this.formBuilder.control(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private oneServiceService: OneServiceService
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.oneServiceService.addTodo(this.formTwo.value);
  }

}
