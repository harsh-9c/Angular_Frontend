import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmembersComponent } from './components/addmembers/addmembers.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './layout/login/login.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ManagerComponent } from './layout/manager/manager.component';
import { EmployeeComponent } from './layout/employee/employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskComponent } from './components/task/task.component';
import { SubtaskComponent } from './components/subtask/subtask.component';

@NgModule({
  declarations: [
    AppComponent,
    AddmembersComponent,
    CardsComponent,
    LoginComponent,
    SidenavComponent,
    HomeComponent,
    NotFoundComponent,
    ManagerComponent,
    EmployeeComponent,
    NavbarComponent,
    TaskComponent,
    SubtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
