import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-card-vr-chart',
  templateUrl: './card-vr-chart.component.html',
  styleUrls: ['./card-vr-chart.component.css'],
})
export class CardVrChartComponent {
  compProject: any;
  ongProject: any;
  Completedcount: number;
  Ongoingcount: number;

  doughnutchart: any;
  tasks: any;
  progress: number = 0;
  ProjectProgress: number;
  projectTitle: String;
  projectSubtitle = 'Project Progress';
  constructor(private projectService: ProjectService) {
    // this.projectService.findCompletedAll().subscribe((data2) => {
    //   this.compProject = data2;
    //   this.Completedcount = this.compProject.length;
    //   //this.populateChart();
    // });
    // this.projectService.findOngoing().subscribe((data3) => {
    //   this.ongProject = data3;
    //   this.Ongoingcount = this.ongProject.length;
    //   // this.populateChart();
    // });
  }

  ngOnInit() {
    // this.projectService.findCompletedAll().subscribe((data2) => {
    //   this.compProject = data2;
    //   this.Completedcount = this.compProject.length;
    //   this.populateChart();
    // });
    // this.projectService.findOngoing().subscribe((data3) => {
    //   this.ongProject = data3;
    //   this.Ongoingcount = this.ongProject.length;
    //   this.populateChart();
    // });
    //this.populateChart();
  }

  populateChart() {
    this.doughnutchart = new Chart('doughnutchart_canvas', {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Ongoing'],
        datasets: [
          {
            label: 'Points',
            data: [this.Completedcount, this.Ongoingcount],
            backgroundColor: ['#1fd10f', 'red'],
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
    this.Completedcount = 0;
    this.ngOnInit();
  }
}
