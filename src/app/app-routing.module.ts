import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsCreatePageComponent } from './pages/admins/admins-create-page/admins-create-page.component';
import { ConfigsCreatePageComponent } from './pages/configs/pages/configs-create-page/configs-create-page.component';
import { ConfigsEditPageComponent } from './pages/configs/pages/configs-edit-page/configs-edit-page.component';
import { ConfigsListPageComponent } from './pages/configs/pages/configs-list-page/configs-list-page.component';
import { DashboardPageComponent } from './pages/main/dashboard-page/dashboard-page.component';
import { GroupsCreatePageComponent } from './pages/groups/pages/groups-create-page/groups-create-page.component';
import { GroupsEditPageComponent } from './pages/groups/pages/groups-edit-page/groups-edit-page.component';
import { GroupsListPageComponent } from './pages/groups/pages/groups-list-page/groups-list-page.component';
import { RequestsListPageComponent } from './pages/requests/pages/requests-list-page/requests-list-page.component';
import { RequestsEditPageComponent } from './pages/requests/pages/requests-edit-page/requests-edit-page.component';
import { UsersEditPageComponent } from './pages/users/pages/users-edit-page/users-edit-page.component';
import { UsersListPageComponent } from './pages/users/pages/users-list-page/users-list-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';
import { LoginPageComponentComponent } from './pages/login/login-page/components/login-page-component/login-page-component.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: DashboardPageComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admins/create',
    component: AdminsCreatePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configs/create',
    component: ConfigsCreatePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configs/edit/:id',
    component: ConfigsEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'configs/list',
    component: ConfigsListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups/create',
    component: GroupsCreatePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups/edit/:id',
    component: GroupsEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups/list',
    component: GroupsListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'requests/list',
    component: RequestsListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'requests/edit/:id',
    component: RequestsEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/edit/:id',
    component: UsersEditPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users/list',
    component: UsersListPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminsCreatePageComponent,
  },

  { path: 'login', component: LoginPageComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
