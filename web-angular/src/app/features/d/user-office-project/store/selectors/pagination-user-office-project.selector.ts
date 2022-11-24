import { createSelector } from '@ngrx/store';

import * as fromFeature from '@web/app/features/d/user-office-project/store/reducers';
import * as fromPagination from '@web/app/features/d/user-office-project/store/reducers/pagination-user-office-project.reducer';

export const getPaginationState = createSelector(
    fromFeature.getUserOfficeProjectState,
    (state: fromFeature.UserOfficeProjectState) => state.pagination
);

export const getTotal = createSelector(
    getPaginationState,
    fromPagination.getTotal
);

export const getPerPage = createSelector(
    getPaginationState,
    fromPagination.getPerPage
);

export const getCurrentPage = createSelector(
    getPaginationState,
    fromPagination.getCurrentPage
);

export const getFrom = createSelector(
    getPaginationState,
    fromPagination.getFrom
);

export const getTo = createSelector(
    getPaginationState,
    fromPagination.getTo
);
