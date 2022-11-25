import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref-child',
  templateUrl: './template-ref-child.component.html',
  styleUrls: ['./template-ref-child.component.scss']
})
export class TemplateRefChildComponent {

  count = 1;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
