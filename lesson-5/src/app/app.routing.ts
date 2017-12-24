import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MemberInfoComponent } from './member-info/member-info.component';

export const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'member', component: MemberInfoComponent },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

