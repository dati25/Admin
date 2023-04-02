import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersEditPageComponent } from './pages/users-edit-page/users-edit-page.component';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component';
import { ConfigAddEditComponent } from './pages/config-add-edit/config-add-edit.component';

import { AuthService } from './auth.service';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { RequestPageComponent } from './pages/request-page/request-page.component';
import { GroupsPageComponent } from './pages/groups-page/groups-page.component';
import { GroupAddPageComponent } from './pages/group-add-page/group-add-page.component';
import { AddusersPageComponent } from './pages/addusers-page/addusers-page.component';
import { AdmincreationPageComponent } from './admincreation-page/admincreation-page.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersEditPageComponent,
    MainDashboardComponent,
    LoginPageComponent,
    ConfigurationPageComponent,
    ConfigAddEditComponent,
    UsersPageComponent,
    UserInfoComponent,
    RequestPageComponent,
    GroupsPageComponent,
    GroupAddPageComponent,
    AddusersPageComponent,
    AdmincreationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
