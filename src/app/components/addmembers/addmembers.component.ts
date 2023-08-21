import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Skills } from '../../models/skills';
import { Employee } from '../../models/employee';
import { Projectmember } from '../../models/projectmember';
import { Project } from '../../models/project';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../../services/employee.service';
import { ProjectService } from '../../services/project.service';
import { ProjectmemberService } from '../../services/projectmember.service';
import { Router } from '@angular/router';
import { SkillService } from '../../services/skill.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon',
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'purple',
  'fuchsia',
  'lime',
  'teal',
  'aqua',
  'blue',
  'navy',
  'black',
  'gray',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.component.html',
  styleUrls: ['./addmembers.component.css'],
})
export class AddmembersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'add'];
  // dataSource: any;
  dataSource: any;
  skill: any;
  skills: Array<Skills> | undefined;
  employees = new Array<Employee>();
  projectMember: Projectmember | undefined;
  projectId: number | undefined;
  projectDemo: Project | undefined;
  // employeesAndSkills = new Array<EmployeeSkill>();
  // employeeandSkill: any;

  @ViewChild(MatPaginator, { static: true }) paginator:
    | MatPaginator
    | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(
    private employeeService: EmployeeService,
    private skillsService: SkillService,
    private projectService: ProjectService,
    private projectMemberService: ProjectmemberService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    //this.projectId = Number(sessionStorage.getItem('pid'));
    this.projectId = 1;
    this.skillsService.findAll().subscribe((response) => {
      this.skills = response;
      console.log(response);
    });

    this.projectService.findById(this.projectId).subscribe((response) => {
      this.projectDemo = response;
      console.log(response);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onChange(value: string) {
    console.log(this.skill);
    this.employeeService.findSkilledEmployee(value).subscribe((response) => {
      this.employees = response;
      console.log(response);
      this.dataSource = this.employees;
    });
  }

  addEmployee(employeeId: number, row: HTMLElement) {
    if (window.confirm('Are you sure you want to add this employee ?')) {
      this.projectMember = new Projectmember();
      this.projectMember.employeeId = this.employees[employeeId];
      this.projectMember.authority = true;
      this.projectMember.projectId = this.projectDemo;

      this.projectMemberService
        .save(this.projectMember)
        .subscribe((response) => {
          console.log('project member added');
          this.router.navigate(['manager/workforceM']);
        });

      this.delete(row);
    }
  }

  delete(row: HTMLElement) {
    this.dataSource = this.dataSource.filter((i: any) => i !== row);
    this.changeDetectorRef.detectChanges();
  }
}
