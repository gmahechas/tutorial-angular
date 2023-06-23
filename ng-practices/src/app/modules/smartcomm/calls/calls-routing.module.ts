import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsContainerComponent } from './containers/calls-container/calls-container.component';

const routes: Routes = [
  {
    path: '',
    component: CallsContainerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallsRoutingModule { }
