import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersListPageComponent } from './pages/users-list-page/users-list-page.component';
import { UsersEditPageComponent } from './pages/users-edit-page/users-edit-page.component';
import { GroupsListPageComponent } from './pages/groups-list-page/groups-list-page.component';
import { GroupsEditPageComponent } from './pages/groups-edit-page/groups-edit-page.component';
import { GroupsCreatePageComponent } from './pages/groups-create-page/groups-create-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AdminsCreatePageComponent } from './pages/admins-create-page/admins-create-page.component';
import { RequestsListPageComponent } from './pages/requests-list-page/requests-list-page.component';
import { ConfigsListPageComponent } from './pages/configs-list-page/configs-list-page.component';
import { ConfigsEditPageComponent } from './pages/configs-edit-page/configs-edit-page.component';
import { ConfigsCreatePageComponent } from './pages/configs-create-page/configs-create-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { GroupsTableComponent } from './components/groups-table/groups-table.component';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';
import { SettingsReportFormComponent } from './components/settings-report-form/settings-report-form.component';
import { GroupsFormComponent } from './components/groups-form/groups-form.component';
import { GroupsUsersComponent } from './components/groups-users/groups-users.component';
import { RequestsTableComponent } from './components/requests-table/requests-table.component';
import { ConfigsTableComponent } from './components/configs-table/configs-table.component';
import { ConfigsFormComponent } from './components/configs-form/configs-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginPageComponentComponent } from './components/login-page-component/login-page-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    UsersListPageComponent,
    UsersEditPageComponent,
    GroupsListPageComponent,
    GroupsEditPageComponent,
    GroupsCreatePageComponent,
    SettingsPageComponent,
    AdminsCreatePageComponent,
    RequestsListPageComponent,
    ConfigsListPageComponent,
    ConfigsEditPageComponent,
    ConfigsCreatePageComponent,
    DashboardPageComponent,
    UsersTableComponent,
    UsersFormComponent,
    GroupsTableComponent,
    SettingsFormComponent,
    SettingsReportFormComponent,
    GroupsFormComponent,
    GroupsUsersComponent,
    RequestsTableComponent,
    ConfigsTableComponent,
    ConfigsFormComponent,
    LoginPageComponent,
    LoginPageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
