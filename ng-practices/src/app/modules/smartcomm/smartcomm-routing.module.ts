import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartcommContainerComponent } from './containers/smartcomm-container/smartcomm-container.component';

const routes: Routes = [
  {
    path: '',
    component: SmartcommContainerComponent,
    children: [
      { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) },
      { path: 'calls', loadChildren: () => import('./calls/calls.module').then(m => m.CallsModule) },
      { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartcommRoutingModule { }
