import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css'],
})
export class SubtaskComponent {
  tasks: any;
  projects: any;
  subtasks: any = [];
  editMode: boolean | undefined;
  updatedSubId: number = 0;
  updatedVal: number | undefined;
  updatedComment: string | undefined;
  enableEdit = false;
  enableEditIndex = null;

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }
  private getProjects() {
    this.projectService
      .getProjectById(Number(localStorage.getItem('userId')))
      .subscribe(
        (data) => {
          console.log(data);
          this.projects = data;
          this.getTask(this.projects.projectId);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private getTask(id: number) {
    this.projectService.getTaskByProjectId(id).subscribe(
      (data) => {
        console.log(data);
        this.tasks = data;
        for (var i = 0; i < this.tasks.length; i++) {
          this.getSubTasks(this.tasks[i].taskId);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getSubTasks(id: number) {
    this.projectService.getSubTaskByTaskId(id).subscribe(
      (data) => {
        this.subtasks.push(data);
        console.log(this.subtasks);
        this.subtasks.sort((a: any, b: any) =>
          a[0].taskId.taskId < b[0].taskId.taskId ? -1 : 1
        );
        // console.log(this.subtasks[0][0].subTaskId);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  update(): void {
    const subId = this.updatedSubId?.toString();
    localStorage.setItem('subtaskId', subId);
    this.router.navigate(['/edit-subtask']);
  }

  enableEditMethod(e: any, i: any) {
    this.enableEditIndex = i;
    console.log(i, e);
  }
}
