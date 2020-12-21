import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { OneServiceService } from '@myapp/app/modules/one/services/one-service.service';

@Component({
  selector: 'app-index-three',
  templateUrl: './index-three.component.html',
  styleUrls: ['./index-three.component.scss']
})
export class IndexThreeComponent implements OnInit {

  todo$ = this.oneServiceService.todos.pipe(
    map(data => data)
  );

  constructor(
    private oneServiceService: OneServiceService
  ) { }

  ngOnInit(): void {
  }

}
