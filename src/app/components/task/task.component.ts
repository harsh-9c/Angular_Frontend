import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  tasks: any;
  projects: any;

  constructor(private projectService: ProjectService) {}

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
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
