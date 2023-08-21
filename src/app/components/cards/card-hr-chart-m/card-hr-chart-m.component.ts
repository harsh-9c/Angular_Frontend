import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';
import { Project } from '../../../models/project';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-card-hr-chart-m',
  templateUrl: './card-hr-chart-m.component.html',
  styleUrls: ['./card-hr-chart-m.component.css'],
})
export class CardHrChartMComponent implements OnInit {
  barchart: any;
  tasks: any;
  labels: any;
  progress: any;
  taskCount: any;
  taskHeader = 'Tasks';
  taskSubtitle = 'Task Progress';
  projectId: any;
  project: any;
  constructor(
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    //this.projectId = Number(sessionStorage.getItem('pid'));
    this.projectId = 1;
    this.taskService.findTask(this.projectId).subscribe((response) => {
      this.tasks = response;
      this.getTaskDetails();
      this.populateChart();
    });
  }

  getTaskDetails() {
    for (const task of this.tasks) {
      this.labels.push(task.taskTitle);
      this.progress.push(task.progress);
    }
  }

  populateChart() {
    this.barchart = new Chart('barchart_canvas', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Percentage of Task Completion',
            data: this.progress,
            backgroundColor: [
              'rgba(255,99,132,0.2)',
              'rgba(0,255,0,0.2)',
              'rgba(0,0,255,0.3)',
            ],
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              //beginAtZero: true,
              //suggestedMax: 100
            },
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
