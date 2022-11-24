import { createSelector } from '@ngrx/store';

import * as fromFeature from '@web/app/features/b/department/store/reducers';
import * as fromLayout from '@web/app/features/b/department/store/reducers/layout-department.reducer';

export const getLayoutState = createSelector(
  fromFeature.getDepartmentState,
  (state: fromFeature.DepartmentState) => state.layout
);

export const getSelected = createSelector(
  getLayoutState,
  fromLayout.getSelected
);

export const getError = createSelector(
  getLayoutState,
  fromLayout.getError
);

export const getPending = createSelector(
  getLayoutState,
  fromLayout.getPending
);
