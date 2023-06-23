import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss']
})
export class AboutContainerComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
