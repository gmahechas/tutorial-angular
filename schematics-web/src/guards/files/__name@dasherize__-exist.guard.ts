import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import * as fromCore from '@web/app/core/store';

import { Observable, of } from 'rxjs';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>ExistGuard implements CanActivate {

  constructor(
    private store: Store<from<%= classify(name) %>.State>
  ) { }

  hasInStore(<%= camelize(name) %>Id: string): Observable<boolean> {
    return this.store.pipe(
      select(from<%= classify(name) %>.getEntities),
      map(entities => !!entities[<%= camelize(name) %>Id]),
      take(1)
    );
  }

  hasEntity(<%= camelize(name) %>Id: string): Observable<boolean> {
    return this.hasInStore(<%= camelize(name) %>Id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }
        this.store.dispatch(fromCore.RouterActions.Go({
          path: ['not-found']
        }));
        return of(false);
      })
    );
  }

  checkStore(<%= camelize(name) %>Id: string): Observable<boolean> {
    return this.store.pipe(
      select(from<%= classify(name) %>.getLoaded),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(from<%= classify(name) %>.EntityActions.LoadEntity({
            search: {
              <%= underscore(name) %>: {
                <%= underscore(name) %>_id: <%= camelize(name) %>Id,
                // TODO:
              },
              // TODO:
            }
          }));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore(route.params.<%= underscore(name) %>_id).pipe(
      switchMap(() => this.hasEntity(route.params.<%= underscore(name) %>_id))
    );
  }

}