import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCoursesComponent } from './containers/index-courses/index-courses.component';
import { ViewCoursesComponent } from './containers/view-courses/view-courses.component';

const routes: Routes = [
  { path: '', component: IndexCoursesComponent, },
  { path: ':id', component: ViewCoursesComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
