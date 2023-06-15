import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-workload-presentation',
  templateUrl: './workload-presentation.component.html',
  styleUrls: ['./workload-presentation.component.scss']
})
export class WorkloadPresentationComponent {
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
    this.workloadChart()
  }
  // WorkLoad Chart
   public workloadChart():void{
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
    const workLoadChart = document.getElementById('workload') as HTMLCanvasElement;
    this.chart = new Chart(workLoadChart, {
      type: 'bar',
      data: {
        labels: ["Mike", "Jennifer", "Brandon", "sam", "George"],
        datasets: [
          {
            label: "Completed",
            data: [4, 2, 0, 0, 0],
            backgroundColor: "#68cc6d",
            barThickness:18
          },
          {
            label: "Remaining",
            data: [0, 2, 1, 3, 1],
            backgroundColor: "#50cac1",
            barThickness:18
          },
          {
            label: "Overdue",
            data: [0, 0, 0, 0, 0],
            backgroundColor: "#f0504c",
            barThickness:18
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        bar: {
          datasets: {

          }
        },
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            align: 'start',
            labels: {
              font: {
                size: 14
              },
              usePointStyle: true,
              pointStyle: 'circle'
            },
          }
        },
        scales: {
          x: {
            max: 8,
            stacked: true,
            grid: {
              display: true,
              color: 'hsl(229.41deg 20.48% 16.27%)'
            },
            ticks: {
              stepSize: 2,
              color: 'gray',
            }
          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              crossAlign: 'far',
              padding: 30,
              color: 'gray',
              font: {
                size: 15
              },
            }
          },
        },
        layout: {
          padding: {
            top:20,
            bottom:60,
            left:20,
            right:20
          }
        }
      },
      plugins: [legendMargin]
    });
   }
}
