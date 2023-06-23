import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-toolbar',
  templateUrl: './shared-toolbar.component.html',
  styleUrls: ['./shared-toolbar.component.scss']
})
export class SharedToolbarComponent {

  @Input() color = 'primary';
}
