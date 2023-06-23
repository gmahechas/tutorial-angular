import { Component } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-core-container',
  templateUrl: './core-container.component.html',
  styleUrls: ['./core-container.component.scss']
})
export class CoreContainerComponent {

  constructor(
    public routerService: RouterService
  ) { }

}
