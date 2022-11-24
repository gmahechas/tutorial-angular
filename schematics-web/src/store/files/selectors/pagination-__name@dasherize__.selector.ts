import { createSelector } from '@ngrx/store';

import * as fromFeature from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers';
import * as fromPagination from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/pagination-<%= dasherize(name) %>.reducer';

export const getPaginationState = createSelector(
    fromFeature.get<%= classify(name) %>State,
    (state: fromFeature.<%= classify(name) %>State) => state.pagination
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
