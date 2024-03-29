import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHomeComponent } from './containers/index-home/index-home.component';

const routes: Routes = [
  { path: '', component: IndexHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
