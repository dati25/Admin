import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './pages/admin-add/admin-add.component';
import { ConfigurationEditComponent } from './pages/configuration-edit/configuration-edit.component';
import { ConfigurationUsersEditComponent } from './pages/configuration-users-edit/configuration-users-edit.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'user/info', component: UserInfoComponent },
    { path: 'requests', component: RequestsComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'group/edit', component: GroupEditComponent },
    { path: 'configurations', component: ConfigurationsComponent },
    { path: 'configuration/edit', component: ConfigurationEditComponent },
    {
        path: 'configuration/users',
        component: ConfigurationUsersEditComponent,
    },
    { path: 'settings', component: SettingsComponent },
    { path: 'admin/add', component: AdminAddComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
