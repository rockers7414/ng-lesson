import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'users', component: UserMgmtComponent },
      { path: '**', redirectTo: 'users' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

