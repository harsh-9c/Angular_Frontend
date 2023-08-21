import { Component, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css'],
})
export class CardSmComponent {
  allProjects: any;
  compProject: any;
  ongProject: any;
  allEmp: any;

  allPorjectcount: number;
  Completedcount: number;
  Ongoingcount: number;
  EmployeeCount: number;
  data;
  iconData: string;
  @Input()
  cardData: string;
  constructor(
    private projectService: ProjectService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.projectService.getAllProjectDetails().subscribe(
      (data1) => {
        this.allProjects = data1;
        console.log(this.allProjects);
        this.allPorjectcount = this.allProjects.length;
      },
      (error) => {
        console.log(error);
        console.log(error.error);
      }
    );

    this.projectService.getAllCompletedProjects().subscribe(
      (data2) => {
        console.log('hhhhehehehe');
        this.compProject = data2;
        console.log(this.compProject + 'hello');

        this.Completedcount = this.compProject.length;
      },
      (error) => {
        console.log(error);
      }
    );
    this.projectService.getAllOngoingProjects().subscribe(
      (data3) => {
        console.log(data3);
        this.ongProject = data3;
        this.Ongoingcount = this.ongProject.length;
      },
      (error) => {
        console.log(error);
      }
    );
    this.employeeService.getAllEmployee().subscribe((data4) => {
      this.allEmp = data4;
      this.EmployeeCount = this.allEmp.length;
      this.check_card_data();
    });
  }

  check_card_data() {
    switch (this.cardData) {
      case 'Total':
        this.data = this.allPorjectcount;
        this.iconData = 'assessment';
        break;
      case 'Completed':
        this.data = this.Completedcount;
        this.iconData = 'assessment';
        break;
      case 'Ongoing':
        this.data = this.Ongoingcount;
        this.iconData = 'assessment';
        break;
      case 'Employees':
        this.data = this.EmployeeCount;
        this.iconData = 'assessment';
        break;
      default:
        this.data = 'data missing';
    }
  }
}
