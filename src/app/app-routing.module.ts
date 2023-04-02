import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditPageComponent } from './pages/users-edit-page/users-edit-page.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { ConfigAddEditComponent } from './pages/config-add-edit/config-add-edit.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { GroupAddPageComponent } from './pages/group-add-page/group-add-page.component';
import { AddusersPageComponent } from './pages/addusers-page/addusers-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AdminAddPageComponent } from './pages/admin-add-page/admin-add-page.component';

const routes: Routes = [
  { path: 'dashboard', component: MainDashboardComponent},
  { path: 'configuration', component: ConfigurationPageComponent},
  { path: 'users/edit', component: UsersEditPageComponent },
  { path: '', component: LoginPageComponent },
  { path: 'configuration/add', component: ConfigAddEditComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'users/info' , component: UserInfoComponent}, // potom tam bude users/:id
  { path: 'requests', component: RequestPageComponent},
  { path: 'groups', component: GroupsPageComponent},
  { path : 'groups/add', component: GroupAddPageComponent},
  { path : 'configuration/add/user', component: AddusersPageComponent}
  { path: 'groups/add', component: GroupAddPageComponent},
  { path: 'settings', component: SettingsPageComponent},
  { path: 'admin', component: AdminAddPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
