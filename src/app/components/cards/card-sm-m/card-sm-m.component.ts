import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';
import { ProjectmemberService } from '../../../services/projectmember.service';

@Component({
  selector: 'app-card-sm-m',
  templateUrl: './card-sm-m.component.html',
  styleUrls: ['./card-sm-m.component.css'],
})
export class CardSmMComponent implements OnInit {
  projectId: any;
  project: any;
  projectMemberCount: any;
  data: any;
  iconData: any;
  @Input()
  cardData: any;

  constructor(
    private projectService: ProjectService,
    private projectMemberService: ProjectmemberService
  ) {}

  ngOnInit() {
    //this.projectId = Number(sessionStorage.getItem('pid'));
    this.projectId = 1;
    this.projectService.findById(this.projectId).subscribe((response) => {
      this.project = response;
      this.getProjectMembers();
    });
  }

  getProjectMembers() {
    this.projectMemberService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.projectMemberCount = response.length + 1;
        this.check_card_data();
      });
  }

  check_card_data() {
    switch (this.cardData) {
      case 'Start Date':
        const startDate = new Date(this.project.startDate);
        this.data =
          startDate.getDate().toString() +
          '/' +
          startDate.getMonth().toString() +
          '/' +
          startDate.getFullYear().toString();
        this.iconData = 'calendar_today';
        break;
      case 'Due Date':
        const dueDate = new Date(this.project.endDate);
        this.data =
          dueDate.getDate().toString() +
          '/' +
          dueDate.getMonth().toString() +
          '/' +
          dueDate.getFullYear().toString();
        this.iconData = 'calendar_today';
        break;
      case 'Budget':
        this.data = '$ ' + this.project.budget;
        this.iconData = 'attach_money';
        break;
      case 'Employees':
        this.data = this.projectMemberCount;
        this.iconData = 'people';
        break;
      default:
        this.data = 'data missing';
    }
  }
}
