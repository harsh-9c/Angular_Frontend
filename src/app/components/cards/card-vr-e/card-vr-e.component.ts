import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js';
import { Task } from 'src/app/models/task';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { CompletedialogComponentComponent } from '../../completedialog-component/completedialog-component.component';

@Component({
  selector: 'app-card-vr-e',
  templateUrl: './card-vr-e.component.html',
  styleUrls: ['./card-vr-e.component.css'],
})
export class CardVrEComponent {
  doughnutchart: any;
  tasks: any;
  progress = 0;
  ProjectProgress: number;
  projectTitle: string;
  projectSubtitle = 'Project Progress';
  projectId: number;
  project: any;
  projectDescription: string;

  projectDemo: any;
  enterProject: string;
  projectName: string;
  dd: string;

  constructor(
    private projectService: ProjectService,
    private taskService: TaskService,
    public dialog: MatDialog
  ) {
    this.tasks = new Array<Task>();
  }

  ngOnInit() {
    // this.projectId = Number(sessionStorage.getItem('pid'));
    // this.chartService.getProjectProgressData().subscribe(response => {
    //   this.tasks = response;
    //   this.projectTitle = this.tasks[0].projectId.description;
    //   this.getTaskProgressDetails();
    //   this.populateChart();
    // });
    this.projectService
      .findById(Number(localStorage.getItem('userId')))
      .subscribe((response) => {
        this.project = response;
        this.projectTitle = response.name;
        this.projectDescription = response.githubLink;
        this.projectDemo = response;
        this.projectName = this.projectDemo.name;
      });

    this.taskService
      .findTask(Number(localStorage.getItem('userId')))
      .subscribe((response) => {
        this.tasks = response;
        this.getTaskProgressDetails();
        this.populateChart();
      });
  }

  getTaskProgressDetails() {
    for (const task of this.tasks) {
      this.progress += task.progress;
    }
  }

  populateChart() {
    if (this.progress != 0) {
      this.ProjectProgress = Math.round(this.progress / this.tasks.length);
    } else {
      this.ProjectProgress = 0;
    }

    this.doughnutchart = new Chart('doughnutchart_canvas', {
      type: 'doughnut',
      data: {
        labels: ['Progress', 'Progress Remaining'],
        datasets: [
          {
            label: 'Points',
            data: [this.ProjectProgress, 100 - this.ProjectProgress],
            backgroundColor: ['#1fd10f', '#e3e3e3'],
          },
        ],
      },
      options: {
        cutout: 50,
        animation: {
          animateScale: true,
        },
      },
    });
  }

  refresh() {
    this.progress = 0;
    this.ngOnInit();
  }

  description() {
    window.open(this.projectDescription);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CompletedialogComponentComponent, {
      width: '400px',
      data: { projectName: this.projectName, enterProject: this.enterProject },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.enterProject = result;
      const dd = this.projectName;

      if (this.enterProject === undefined) {
        console.log('Project is not deleted');
      } else if (this.enterProject.toUpperCase() === dd.toUpperCase()) {
        console.log(this.projectDemo);

        this.projectService
          .setProjectComplete(this.projectDemo)
          .subscribe((response) => {});

        console.log('hi 2');

        console.log('Project is deleted.');
      }
    });
  }
}
