import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-progress-presentation',
  templateUrl: './progress-presentation.component.html',
  styleUrls: ['./progress-presentation.component.scss']
})
export class ProgressPresentationComponent implements OnInit {
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
    Chart.register(ChartDataLabels);
    const progressChart = document.getElementById('Progress') as HTMLCanvasElement;
    this.chart = new Chart(progressChart, {
      type: 'bar',
      data: {
        labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Const...', 'Project Clo...'],
        datasets: [
          {
            data: [
              100, 80, 19, 0.5, 0.5, 0.5
            ],
            backgroundColor: ['#6acb6d', '#67cb6c', '#df5a9d', '#7f848e', '#7f848e', '#7f848e'],
            borderWidth: 0
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels:{
                   align:'start'
          },
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            grid: {
              display: false,
            },
            ticks: {
              crossAlign: 'far',
              padding: 20,
              color: 'white',
              font: {
                size: 15
              },
            }
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            }
          }
        },
        layout: {
          padding: {
            top: 30,
            right: 20,
          }
        }
      },
    });
  }

};





