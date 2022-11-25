import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from '../../content-child/tab/tab.interface';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit, Tab {

  @Input() title: string = '';
  @Output() onClick : EventEmitter<void> = new EventEmitter<void>();
  public isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  clickTabContent() {
    this.onClick.emit();
  }
}
