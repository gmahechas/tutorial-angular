import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { IndexCoursesComponent } from './containers/index-courses/index-courses.component';
import { ViewCoursesComponent } from './containers/view-courses/view-courses.component';

@NgModule({
  declarations: [
    IndexCoursesComponent,
    ViewCoursesComponent
  ],
  imports: [
    StoreModule.forFeature('courses', reducers),
    EffectsModule.forFeature(effects),
    CoursesRoutingModule,
    SharedModule,
  ]
})
export class CoursesModule { }
