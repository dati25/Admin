import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsCreatePageComponent } from './pages/admins-create-page/admins-create-page.component';
import { ConfigsCreatePageComponent } from './pages/configs-create-page/configs-create-page.component';
import { ConfigsEditPageComponent } from './pages/configs-edit-page/configs-edit-page.component';
import { ConfigsListPageComponent } from './pages/configs-list-page/configs-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { GroupsCreatePageComponent } from './pages/groups-create-page/groups-create-page.component';
import { GroupsEditPageComponent } from './pages/groups-edit-page/groups-edit-page.component';
import { GroupsListPageComponent } from './pages/groups-list-page/groups-list-page.component';
import { RequestsListPageComponent } from './pages/requests-list-page/requests-list-page.component';
import { UsersEditPageComponent } from './pages/users-edit-page/users-edit-page.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

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
  { path: 'users/edit/:id', component: UsersEditPageComponent },
  { path: 'users/list', component: UsersListPageComponent },
  { path: 'settings', component: SettingsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
