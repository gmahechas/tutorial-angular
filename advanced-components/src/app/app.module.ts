import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateRefComponent } from './components/template-ref/template-ref.component';
import { TemplateRefChildComponent } from './components/template-ref/template-ref-child/template-ref-child.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { TabComponent } from './components/content-child/tab/tab.component';
import { TabsComponent } from './components/content-child/tabs/tabs.component';
import { ContentChildDecoratorComponent } from './components/content-child-decorator/content-child-decorator.component';
import { TabTwoComponent } from './components/content-child-decorator/tab-two/tab-two.component';
import { TabsTwoComponent } from './components/content-child-decorator/tabs-two/tabs-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    TemplateRefChildComponent,
    ContentChildComponent,
    TabComponent,
    TabsComponent,
    ContentChildDecoratorComponent,
    TabTwoComponent,
    TabsTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
