import { Component, OnInit, ViewChild } from '@angular/core';
import { Project } from '../../models/project';
import { Projectmongo } from '../../models/projectmongo';
import { ProjectMapper } from '../../models/project-mapper';
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  @ViewChild('projectCreateForm', { static: true }) form: any;
  project: any;
  projectDescStake: any;
  projectMapper: any;
  manager: any;
  employees = new Array<Employee>();
  errormsg: boolean = false;

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.findAvailableManagers();
  }

  findAvailableManagers() {
    this.employeeService.findAll().subscribe((response) => {
      this.employees = response.map((item) => {
        return new Employee(
          item.employeeId,
          item.firstName,
          item.lastName,
          item.middleName,
          item.username,
          item.password,
          item.userType,
          item.availability,
          item.eulAgreement
        );
      });
      if (this.employees.length <= 0) {
        this.errormsg = true;
      } else {
        this.errormsg = false;
      }
    });
  }

  onSubmit() {
    let project1: any;

    this.manager = this.employees.find(
      (i) => i.username === this.projectMapper.managerEmail
    );

    this.project = new Project();
    this.project.projectId = 0;
    this.project.isCompleted = false;
    this.project.name = this.projectMapper.name;
    this.project.startDate = this.projectMapper.startDate;
    this.project.endDate = this.projectMapper.endDate;
    this.project.managerId = this.manager;
    this.project.budget = this.projectMapper.budget;
    this.project.githubLink = this.projectMapper.githubLink;

    this.projectDescStake = new Projectmongo();
    if (this.projectMapper.projectDesc === undefined) {
      this.projectDescStake.projectDesc = '';
    } else {
      this.projectDescStake.projectDesc = this.projectMapper.projectDesc;
    }

    this.projectService.save(this.project).subscribe((result) => {
      project1 = result;
      this.projectDescStake.projectId = project1.projectId;
      this.projectService
        .saveProjectDesc(this.projectDescStake)
        .subscribe((result2) => {});
      this.findAvailableManagers();
    });

    alert('SUCCESS!! :-)\n\n');
    this.form.reset();
  }
}
