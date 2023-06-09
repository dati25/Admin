import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/main/components/header/header.component';
import { UsersListPageComponent } from './pages/users/pages/users-list-page/users-list-page.component';
import { UsersEditPageComponent } from './pages/users/pages/users-edit-page/users-edit-page.component';
import { GroupsListPageComponent } from './pages/groups/pages/groups-list-page/groups-list-page.component';
import { GroupsEditPageComponent } from './pages/groups/pages/groups-edit-page/groups-edit-page.component';
import { GroupsCreatePageComponent } from './pages/groups/pages/groups-create-page/groups-create-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';
import { AdminsCreatePageComponent } from './pages/admins/admins-create-page/admins-create-page.component';
import { RequestsListPageComponent } from './pages/requests/pages/requests-list-page/requests-list-page.component';
import { ConfigsListPageComponent } from './pages/configs/pages/configs-list-page/configs-list-page.component';
import { ConfigsEditPageComponent } from './pages/configs/pages/configs-edit-page/configs-edit-page.component';
import { ConfigsCreatePageComponent } from './pages/configs/pages/configs-create-page/configs-create-page.component';
import { DashboardPageComponent } from './pages/main/dashboard-page/dashboard-page.component';
import { UsersTableComponent } from './pages/users/components/users-table/users-table.component';
import { UsersFormComponent } from './pages/users/components/users-form/users-form.component';
import { GroupsTableComponent } from './pages/groups/components/groups-table/groups-table.component';
import { SettingsFormComponent } from './pages/settings/components/settings-form/settings-form.component';
import { SettingsReportFormComponent } from './pages/settings/components/settings-report-form/settings-report-form.component';
import { GroupsFormComponent } from './pages/groups/components/groups-form/groups-form.component';
import { RequestsTableComponent } from './pages/requests/components/requests-table/requests-table.component';
import { ConfigsTableComponent } from './pages/configs/components/configs-table/configs-table.component';
import { ConfigsFormComponent } from './pages/configs/components/configs-form/configs-form.component';
import { LoginPageComponentComponent } from './pages/login/login-page/components/login-page-component/login-page-component.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { FormButtonsComponent } from './components/form-buttons/form-buttons.component';
import { RequestsEditPageComponent } from './pages/requests/pages/requests-edit-page/requests-edit-page.component';
import { RequestsFormComponent } from './pages/requests/components/requests-form/requests-form.component';
import { SearchCreateComponent } from './components/search-create/search-create.component';
import { InputButtonGroupComponent } from './components/input-button-group/input-button-group.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputCronComponent } from './components/input-cron/input-cron.component';
import { ReportsTableComponent } from './pages/main/components/reports-table/reports-table.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    RequestsTableComponent,
    ConfigsTableComponent,
    ConfigsFormComponent,
    LoginPageComponentComponent,
    InputTextComponent,
    InputSwitchComponent,
    FormButtonsComponent,
    RequestsEditPageComponent,
    RequestsFormComponent,
    SearchCreateComponent,
    InputButtonGroupComponent,
    InputNumberComponent,
    InputCronComponent,
    ReportsTableComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
