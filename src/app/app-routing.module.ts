import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { ManagerComponent } from './layout/manager/manager.component';
import { EmployeeComponent } from './layout/employee/employee.component';
import { TaskComponent } from './components/task/task.component';
import { SubtaskComponent } from './components/subtask/subtask.component';
import { EditSubtaskComponent } from './components/edit-subtask/edit-subtask.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'subtask', component: SubtaskComponent },
  { path: 'subtask/:id', component: SubtaskComponent },
  { path: 'edit-subtask', component: EditSubtaskComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule, FormsModule],
})
export class AppRoutingModule {}
