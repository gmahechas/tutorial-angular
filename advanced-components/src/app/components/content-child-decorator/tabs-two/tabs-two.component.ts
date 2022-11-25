import { AfterContentInit, Component, ContentChildren, QueryList, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tab } from '../../content-child/tab/tab.interface';
import { TabTwoComponent } from '../tab-two/tab-two.component';

@Component({
  selector: 'app-tabs-two',
  templateUrl: './tabs-two.component.html',
  styleUrls: ['./tabs-two.component.scss']
})
export class TabsTwoComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(TabTwoComponent) tabs: QueryList<TabTwoComponent>;
  private tabSubs: Subscription[] = [];

/*   public tabs: Tab[] = []; */

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.tabs.forEach(tab => {
      const sub = tab.onClick.subscribe(() => console.log(`tab ${tab.title} content clicked`));
      this.tabSubs.push(sub);
    });
    this.selectTab(this.tabs.first);
/*     if(this.tabs) {
       console.log(this.tab);
      this.addTab(this.tab);
      this.tabSub = this.tab.onClick.subscribe(() => {console.log('tab content clicked')})
    } */
  }

  ngOnDestroy(): void {
    this.tabSubs.forEach(sub => sub.unsubscribe());
  }

  addTab(tab: Tab) {
/*     if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab); */
  }

  selectTab(tab: Tab) {
    this.tabs.forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
}
