import { Component } from '@angular/core';
import { RouterService } from 'src/app/core/services/router.service';

@Component({
  selector: 'app-smartcomm-container',
  templateUrl: './smartcomm-container.component.html',
  styleUrls: ['./smartcomm-container.component.scss']
})
export class SmartcommContainerComponent {

  constructor(
    private routerService: RouterService
  ) {}

  navigateTo(route: string) {
    this.routerService.navigate(route);
  }
}
