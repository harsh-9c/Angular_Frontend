import { Component, NgModule } from '@angular/core';
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
import { CardLayoutMComponent } from './components/card-layout-m/card-layout-m.component';
import { TaskmComponent } from './components/taskm/taskm.component';
import { WorkforceMComponent } from './components/workforce-m/workforce-m.component';
import { CardEmpLayoutComponent } from './layout/card-emp-layout/card-emp-layout.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { CardLayoutComponent } from './layout/card-layout/card-layout.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'subtask', component: SubtaskComponent },
  { path: 'subtask/:id', component: SubtaskComponent },
  { path: 'edit-subtask', component: EditSubtaskComponent },
  { path: 'card-emp-layout', component: CardEmpLayoutComponent },
  { path: 'employee-update', component: EmployeeUpdateComponent },
  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      {
        path: '',
        component: CardLayoutMComponent,
      },
      {
        path: 'card',
        component: CardLayoutMComponent,
      },
      {
        path: 'taskM',
        component: TaskmComponent,
      },
      {
        path: 'workforceM',
        component: WorkforceMComponent,
      },
      {
        path: 'subtaskM',
        component: SubtaskComponent,
      },
    ],
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: '',
        component: CardLayoutComponent,
      },
      {
        path: 'project',
        component: CardLayoutComponent,
      },
      {
        path: 'workforce',
        component: WorkforceMComponent,
      },
      {
        path: 'task',
        component: TaskComponent,
      },
      {
        path: 'subtask',
        component: SubtaskComponent,
      },
      {
        path: 'createproject',
        component: CreateProjectComponent,
      },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HttpClientModule, FormsModule],
})
export class AppRoutingModule {}
