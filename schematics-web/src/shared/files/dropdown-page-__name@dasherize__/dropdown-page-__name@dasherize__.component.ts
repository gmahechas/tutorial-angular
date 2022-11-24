import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import * as from<%= classify(name) %> from '@web/app/<%= path %>/<%= dasherize(name) %>/store';
import { initialState } from '@web/app/<%= path %>/<%= dasherize(name) %>/store/reducers/search-<%= dasherize(name) %>.reducer';

import { Search<%= classify(name) %> } from '@web/app/<%= path %>/<%= dasherize(name) %>/models/search-<%= dasherize(name) %>.model';

@Component({
  selector: 'app-dropdown-page-<%= dasherize(name) %>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown-page-<%= dasherize(name) %>.component.html',
  styles: []
})
export class DropdownPage<%= classify(name) %>Component implements OnChanges, OnInit {

  @Input() group: FormGroup;
  @Input() groupName: string;
  @Input() controlName: string;
  @Input() options: string[];
  @Input() optionLabel: string;
  @Input() filter = true;
  @Input() onlyShow: 'store' | 'store_form' | 'form' = 'store_form';
  @Input() placeholder: string[];
  @Input() filterPlaceholder: string[];
  @Input() showClear: boolean;
  @Input() dropdownIcon: string;
  @Input() emptyFilterMessage: string[];
  @Input() isConditional = false;
  @Input() keyboardKey: 'Enter' | 'Any' = 'Enter';
  @Input() keyUpTimes = 3;
  @Input() loadOnInit = false;
  @Input() search<%= classify(name) %>: Search<%= classify(name) %>;
  @Output() changeDropdown = new EventEmitter<any>();
  entities$ = this.store.pipe(select(from<%= classify(name) %>.getAllEntities));
  entityId = '<%= underscore(name) %>_id';

  constructor(
    private store: Store<from<%= classify(name) %>.State>
  ) { }

  ngOnChanges() {
    if (this.isConditional) {
      this.store.dispatch(from<%= classify(name) %>.EntityActions.Reset({ redirect: false }));
    }
  }

  ngOnInit() {
    if (this.loadOnInit && this.search<%= classify(name) %>) {
      setTimeout(() => {
        this.onLoad({
          <%= underscore(name) %>: {
            // TODO:
          },
          // TODO:
        });
      });
    }
  }

  onLoad(search<%= classify(name) %>: Search<%= classify(name) %>) {
    this.store.dispatch(from<%= classify(name) %>.EntityActions.LoadEntityShared({
      search: search<%= classify(name) %>
    }));
  }

  keyUp(event) {
    this.onLoad({
      <%= underscore(name) %>: {
        ...initialState.query.<%= underscore(name) %>,
        [this.optionLabel]: event
      },
      // TODO:
    });
  }

  handleChange(event) {
    this.changeDropdown.emit(event);
  }
}
