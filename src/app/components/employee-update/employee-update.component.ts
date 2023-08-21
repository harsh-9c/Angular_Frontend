import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProjectService } from 'src/app/services/project.service';
import { SubTaskService } from 'src/app/services/sub-task.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent {
  notifications = 5;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  //tasks = taskDescription;
  id: number;
  id1: number;
  subtaskObj: any;
  //For the comments
  showForm = 'none';
  //updateProgress = 0;
  barValue = 'block';
  textValue = 'none';

  tasks: any;
  projects: any;
  subtasks: any = [];
  editMode: boolean | undefined;
  updatedSubId: number = 0;
  updatedVal: number | undefined;
  updatedComment: string | undefined;
  enableEdit = false;
  enableEditIndex = null;
  empName: string;

  cloneData: any;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  constructor(
    private subtaskService: SubTaskService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private projectService: ProjectService,
    private authService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.getProjects();
    this.authService
      .findUserById(Number(localStorage.getItem('userId')))
      .subscribe(
        (data) => {
          console.log(data);
          this.empName = JSON.parse(JSON.stringify(data)).result.firstName;
          this.empName +=
            ' ' + JSON.parse(JSON.stringify(data)).result.lastName;
          console.log(this.empName);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private getProjects() {
    this.projectService
      .getProjectById(Number(localStorage.getItem('projectId')))
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
        console.log(data);
        this.cloneData = JSON.parse(JSON.stringify(data));
        console.log(this.cloneData[0].employeeId);

        if (
          this.cloneData[0].employeeId.employeeId ==
          Number(localStorage.getItem('userId'))
        ) {
          this.subtasks.push(data);
        }
        this.subtasks.sort((a: any, b: any) =>
          a[0].taskId.taskId < b[0].taskId.taskId ? -1 : 1
        );
        // this.loading(this.subtasks[0][0].subTaskId);
        // console.log(this.subtasks[0][0].subTaskId);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // private loading(id: number) {
  //   this.subtaskService.findAll().subscribe((data) => {
  //     console.log(data);
  //     this.subtasks = data;
  //   });
  //   this.id1 = Number(sessionStorage.getItem('pid'));
  // }
  onSubmit(progress: number) {
    //this.id = this.subtaskObj.subTaskId;
    //console.log(this.id);
  }
  // update(
  //   id1,
  //   progress_element: HTMLElement,
  //   comment_element: HTMLElement,
  //   progress_bar: HTMLElement
  // ) {
  //   console.log(progress_bar);
  //   this.barValue = this.barValue == 'block' ? 'none' : 'block';
  //   this.textValue = this.textValue == 'none' ? 'block' : 'none';
  //   progress_bar.style.display = this.barValue;
  //   progress_element.style.display = this.textValue;
  //   comment_element.style.display = this.textValue;
  //   console.log(this.subtasks[id1].progressPercentage);
  //   console.log(this.subtasks[id1].comment);
  //   if (this.subtasks[id1].comment == '') {
  //     this.subtasks[id1].comment = 'Comment here';
  //     //console.log(this.subtasks[id1].comment);
  //   }
  //   //console.log(this.subtasks[id1].comment);
  //   // this.subtaskService
  //   //   .updateProgress(
  //   //     this.subtasks[id1].subTaskId,
  //   //     this.subtasks[id1].progressPercentage,
  //   //     this.subtasks[id1].comment
  //   //   )
  //   //   .subscribe((data) => {
  //   //     console.log(data);
  //   //   });
  // }
  // submitComment() {
  //   console.log('submitted');
  // }
  // updatedProgress(subtaskObj: {
  //   subTaskId: number;
  //   subTaskTitle: string;
  //   subTaskDescription: string;
  //   startDate: Date;
  //   dueDate: Date;
  //   progressPercentage: number;
  // }) {
  //   document.getElementById('progress-bar').style.display = 'block';
  //   document.getElementById('progress-text').style.display = 'none';
  //   //console.log(subtaskObj.progressPercentage);
  // }

  update(): void {
    const subId = this.updatedSubId?.toString();
    localStorage.setItem('subtaskId', subId);
    this.router.navigate(['/edit-subtask']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
