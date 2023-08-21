import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { TaskService } from '../../services/task.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TaskdatastorageService } from '../../services/taskdatastorage.service';
import { Router } from '@angular/router';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-taskm',
  templateUrl: './taskm.component.html',
  styleUrls: ['./taskm.component.css'],
})
export class TaskmComponent implements OnInit {
  task: Task;
  tasks: any;
  taskdata: any;
  projectId: any;
  // Access Session
  projectid: any;
  projectDemo: any;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    public dialog: MatDialog,
    private data: TaskdatastorageService,
    private router: Router
  ) {
    this.task = new Task();
  }

  ngOnInit() {
    // Access Session
    this.projectid = Number(localStorage.getItem('projectId'));
    this.projectService.findById(this.projectid).subscribe((response) => {
      this.projectDemo = response;
      console.log(this.projectDemo.name);
    });

    this.taskService.findTask(this.projectid).subscribe((response: any) => {
      this.tasks = response;
    });
  }

  openDialog(): void {
    // const dialogRef = this.dialog.open(CreateTaskComponent, {
    //
    //   data: {
    //     taskTitle: '',
    //     description: '',
    //     startDate: '',
    //     dueDate: '',
    //   }
    // });

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      taskTitle: '',
      description: '',
      startDate: '',
      dueData: '',
    };

    this.dialog.open(CreateTaskComponent, dialogConfig);
    const dialogRef = this.dialog.open(CreateTaskComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe((result) => {
      if (result !== undefined && result.action !== 0) {
        console.log(result.action);
        this.task.taskId = 0;
        this.task.subTaskCount = 0;
        this.task.progress = 0;
        this.task.projectId = this.projectDemo;
        this.task.taskTitle = result.taskTitle;
        this.task.startDate = result.startDate;
        this.task.dueDate = result.dueDate;
        this.task.description = result.description;
        console.log(this.task);
        this.taskService.save(this.task).subscribe((response: any) => {
          console.log('Task Saved:' + response);
        });
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  gotoSubtasks(taskNo: number) {
    this.data.setData(this.tasks[taskNo]);
    this.router.navigate(['manager/subtaskM']);
  }

  protected readonly CreateTaskComponent = CreateTaskComponent;
}
