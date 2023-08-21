import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-card-hr-chart',
  templateUrl: './card-hr-chart.component.html',
  styleUrls: ['./card-hr-chart.component.css'],
})
export class CardHrChartComponent {
  allProjectcount: number;
  allProjects: any;
  barchart: any;
  projectCnt: any;

  labels: any;
  progress: any;
  c: number;
  maxvalu: number;
  ChartHeader = 'Project Statistics of 5 years';

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    // this.projectService.getLatestProject().subscribe((response) => {
    //   this.allProjects = response;
    //   this.allProjectcount = this.allProjects.length;
    // });
    // this.projectService.getProjectCount().subscribe((cnt) => {
    //   this.projectCnt = cnt;
    //   console.log('prpojectCount' + this.projectCnt);

    //   this.progress = this.projectCnt;
    //   this.maxvalu = this.progress.reduce(function (a, b) {
    //     return Math.max(a, b);
    //   });
    //   console.log(this.maxvalu);
    // });
    this.getTaskDetails();
  }

  getTaskDetails() {
    console.log('GettaskDetails called' + new Date());

    this.maxvalu = 0;
    for (let i = 4; i >= 0; i--) {
      const now = new Date();
      now.setFullYear(now.getFullYear() - i);
      this.labels.push(now.toISOString().slice(0, 4));
    }

    console.log('Progress' + this.progress);
    this.populateChart();
    //console.log("GettaskDetails ended" + new Date())
  }

  private populateChart() {
    //console.log("populate called" + new Date());
    this.barchart = new Chart('barchart_canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Project Statistics of 5 years',
            data: this.progress,
            backgroundColor: [
              '#fcfa81', //olive green
              '#7ee080', //green
              '#7ee0de', //blue
              '#e07ed8', //pink
              '#c181fc', //purple
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  refresh() {
    this.labels = [];
    this.progress = [];
    this.ngOnInit();
  }
}
