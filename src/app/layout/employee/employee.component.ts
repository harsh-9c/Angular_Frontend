import { Component } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  projects: any = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }
  private getProjects() {
    console.log('Id: ' + localStorage.getItem('userId'));
    this.projectService
      .getProjectById(Number(localStorage.getItem('userId')))
      .subscribe(
        (data) => {
          console.log(data);

          // this.projects = JSON.parse(JSON.stringify(data));
          // console.log(this.projects.name);
          this.projects = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
