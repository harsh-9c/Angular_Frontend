import { Component, OnInit } from '@angular/core';
import { Subtask } from '../../models/subtask';
import { Projectmember } from '../../models/projectmember';
import { TaskdatastorageService } from '../../services/taskdatastorage.service';
import { ProjectmemberService } from '../../services/projectmember.service';
import { SubTaskService } from '../../services/sub-task.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateSubTaskComponentComponent } from '../create-sub-task-component/create-sub-task-component.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-subtask-m',
  templateUrl: './subtask-m.component.html',
  styleUrls: ['./subtask-m.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SubtaskMComponent implements OnInit {
  dataSource: any;
  columnsToDisplay = [
    'subTaskTitle',
    'subTaskDescription',
    'startDate',
    'dueDate',
    'employeeId',
    'progressPercentage',
  ];

  subtaskColumns = [
    'Name',
    'Description',
    'Start Date',
    'Due Date',
    'Employee Assigned',
    'Progress',
  ];

  expandedElement: any;
  subtasks: any;
  subtask: Subtask;
  projectMembers = new Array<Projectmember>();
  // Assign from session
  projectId: any;
  taskName: any;

  constructor(
    private data: TaskdatastorageService,
    private projectMemberService: ProjectmemberService,
    private subTaskService: SubTaskService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subtask = new Subtask();
    this.taskName = JSON.parse(this.data.getData()).taskTitle;
  }

  ngOnInit() {
    //this.projectId = Number(sessionStorage.getItem('pid'));
    // obtain projectId from session
    this.projectId = 1;

    this.projectMemberService
      .getProjectMembers(this.projectId)
      .subscribe((response) => {
        this.projectMembers = response.map((item) => {
          console.log(this.projectMembers);
          return new Projectmember(
            item.projectId,
            item.employeeId,
            item.authority
          );
        });
      });

    this.subTaskService
      .findSubTask(JSON.parse(this.data.getData()).taskId)
      .subscribe((response) => {
        this.subtasks = response.map((item) => {
          return new Subtask(
            item.subTaskId,
            item.subTaskTitle,
            item.subTaskDescription,
            item.startDate,
            item.dueDate,
            item.progressPercentage,
            item.comment,
            item.employeeId,
            item.taskId
          );
        });
        this.dataSource = this.subtasks;
      });
  }

  openDialog(): void {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    //
    // dialogConfig.data = {
    //   subTaskTitle: '',
    //   subTaskDescription: '',
    //   startDate: '',
    //   dueDate: '',
    //   employeeId: '',
    //   projectMembers: this.projectMembers,
    // };
    //
    // this.dialog.open(CreateSubTaskComponentComponent, dialogConfig);
    //
    // const dialogRef = this.dialog.open(CreateSubTaskComponentComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreateSubTaskComponentComponent, {
      data: {
        subTaskTitle: '',
        subTaskDescription: '',
        startDate: '',
        dueDate: '',
        employeeId: '',
        projectMembers: this.projectMembers,
      },
    });

    dialogRef.beforeClosed().subscribe((result) => {
      if (result !== undefined && result.action !== 0) {
        this.subtask.taskId = JSON.parse(this.data.getData());
        this.subtask.subTaskId = 0;
        this.subtask.employeeId = result.employeeId;
        this.subtask.subTaskTitle = result.subTaskTitle;
        this.subtask.startDate = result.startDate;
        this.subtask.dueDate = result.dueDate;
        this.subtask.comment = 'Comment here';
        this.subtask.subTaskDescription = result.subTaskDescription;
        this.subtask.progressPercentage = 0;
        this.subTaskService.save(this.subtask).subscribe((response) => {
          console.log('Subtask Saved: ' + response);
        });
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
