import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./modules/home/home.module').then(m => m.HomeModule);
    }
  },
  {
    path: 'courses',
    loadChildren: () => {
      return import('./modules/courses/courses.module').then(m => m.CoursesModule);
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
