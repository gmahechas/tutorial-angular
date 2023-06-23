import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'smartcomm',
    pathMatch: 'full'
  },
  {
    path: 'smartcomm',
    loadChildren: () => {
      return import('../modules/smartcomm/smartcomm.module').then(m => m.SmartcommModule);
    }
  },
  {
    path: 'about',
    loadChildren: () => {
      return import('../modules/about/about.module').then(m => m.AboutModule);
    }
  },
  { path: '**', redirectTo: 'smartcomm' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
