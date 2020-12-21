import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { OneServiceService } from '../../services/one-service.service';

@Component({
  selector: 'app-index-one',
  templateUrl: './index-one.component.html',
  styleUrls: ['./index-one.component.scss']
})
export class IndexOneComponent implements OnInit {

  todo$ = this.oneServiceService.todos.pipe(
    map(data => data)
  );

  constructor(
    private oneServiceService: OneServiceService
  ) { }

  ngOnInit(): void {
  }

}
