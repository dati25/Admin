import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { GroupEditComponent } from './pages/group-edit/group-edit.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ConfigurationEditComponent } from './pages/configuration-edit/configuration-edit.component';
import { ConfigurationUsersEditComponent } from './pages/configuration-users-edit/configuration-users-edit.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AdminAddComponent } from './pages/admin-add/admin-add.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ComputerComponent } from './components/computer/computer.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ConfigurationRecordComponent } from './components/configuration-record/configuration-record.component';
import { GroupRecordComponent } from './components/group-record/group-record.component';
import { RequestRecordComponent } from './components/request-record/request-record.component';
import { ConfigurationFormComponent } from './components/configuration-form/configuration-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
        UserEditComponent,
        UserInfoComponent,
        RequestsComponent,
        GroupsComponent,
        GroupEditComponent,
        ConfigurationsComponent,
        ConfigurationEditComponent,
        ConfigurationUsersEditComponent,
        SettingsComponent,
        AdminAddComponent,
        LoginComponent,
        SidebarComponent,
        HeaderComponent,
        ComputerComponent,
        InputTextComponent,
        SwitchComponent,
        ConfigurationRecordComponent,
        GroupRecordComponent,
        RequestRecordComponent,
        ConfigurationFormComponent,
        UserFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
