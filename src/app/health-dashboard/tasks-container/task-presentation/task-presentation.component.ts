import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartOptions, elements, layouts } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-task-presentation',
  templateUrl: './task-presentation.component.html',
  styleUrls: ['./task-presentation.component.scss']
})
export class TaskPresentationComponent implements OnInit {
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
    this.tasksCreated();
  }
  // Tasks chart
  public tasksCreated() :void{
    Chart.register(ChartDataLabels);
    const legendMargin = {
      id: "increase-legend-spacing",
      beforeInit(chart: any) {
        const Fit = chart.legend.fit;
        chart.legend.fit = function fit() {
          Fit.bind(chart.legend)();
          this.height += 30;
        };
      },
    };
    const taskChart = document.getElementById('tasks') as HTMLCanvasElement;
    this.chart = new Chart(taskChart, {
      type: 'doughnut',
      data: {
        labels: ['Not Started (10)', 'Completed (6)', 'In Progress (2)'],
        datasets: [
          {
            label: 'Tasks',
            data: [10, 6, 2],
            backgroundColor: ['#9da4ad', '#69c66a', '#4fcbc2'],
            borderWidth: 0,

          },
        ],
      },
      options: {
        cutout: '80%',
        spacing: 3,
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {
            anchor: "center",
            align: "end",
            padding: {
              left: 20,
              right: 10,
              top: 20,
            },
            font: {
              weight: 300,
              size: 17,
            },
            color: function (value: any) {
              return value.dataset.backgroundColor[value.dataIndex];
            }
          },
          legend: {
            align: 'center',
            labels: {
              padding: 20,
              font: {
                size: 14
              },
              usePointStyle: true,
              pointStyle: 'circle'
            }
          }
        },
        layout: {
          padding: {
            top: 20,
            right: 35,
            left: 35,
            bottom: 110,

          }
        }
      } ,
      plugins: [legendMargin]
    });
  }
}
