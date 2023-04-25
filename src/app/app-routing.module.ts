import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsCreatePageComponent } from './pages/admins/admins-create-page/admins-create-page.component';
import { ConfigsCreatePageComponent } from './pages/configs/configs-create-page/configs-create-page.component';
import { ConfigsEditPageComponent } from './pages/configs/configs-edit-page/configs-edit-page.component';
import { ConfigsListPageComponent } from './pages/configs/configs-list-page/configs-list-page.component';
import { DashboardPageComponent } from './pages/main/dashboard-page/dashboard-page.component';
import { GroupsCreatePageComponent } from './pages/groups/groups-create-page/groups-create-page.component';
import { GroupsEditPageComponent } from './pages/groups/groups-edit-page/groups-edit-page.component';
import { GroupsListPageComponent } from './pages/groups/groups-list-page/groups-list-page.component';
import { RequestsListPageComponent } from './pages/requests/requests-list-page/requests-list-page.component';
import { RequestsEditPageComponent } from './pages/requests/requests-edit-page/requests-edit-page.component';
import { UsersEditPageComponent } from './pages/users/users-edit-page/users-edit-page.component';
import { UsersListPageComponent } from './pages/users/users-list-page/users-list-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: DashboardPageComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'admins/create', component: AdminsCreatePageComponent },
  { path: 'configs/create', component: ConfigsCreatePageComponent },
  { path: 'configs/edit/:id', component: ConfigsEditPageComponent },
  { path: 'configs/list', component: ConfigsListPageComponent },
  { path: 'groups/create', component: GroupsCreatePageComponent },
  { path: 'groups/edit/:id', component: GroupsEditPageComponent },
  { path: 'groups/list', component: GroupsListPageComponent },
  { path: 'requests/list', component: RequestsListPageComponent },
  { path: 'requests/edit/:id', component: RequestsEditPageComponent },
  { path: 'users/edit/:id', component: UsersEditPageComponent },
  { path: 'users/list', component: UsersListPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
