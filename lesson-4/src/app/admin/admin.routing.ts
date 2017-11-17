import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: '**', redirectTo: 'list' }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

