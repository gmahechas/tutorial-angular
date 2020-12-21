import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () => {
      return import('@myapp/app/modules/one/one.module').then(m => m.OneModule);
    }
  },
  {
    path: 'two',
    loadChildren: () => {
      return import('@myapp/app/modules/two/two.module').then(m => m.TwoModule);
    }
  },
  {
    path: 'three',
    loadChildren: () => {
      return import('@myapp/app/modules/three/three.module').then(m => m.ThreeModule);
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
