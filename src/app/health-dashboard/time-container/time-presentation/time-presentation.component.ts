import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-presentation',
  templateUrl: './time-presentation.component.html',
  styleUrls: ['./time-presentation.component.scss']
})
export class TimePresentationComponent {
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
   this.timeChart();
  }
// Time chart
  public timeChart():void{
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
        const DataLabels = {
          id: "DataLabels",
          afterDatasetsDraw(chart: any) {
            const { ctx, data,chartArea: { width },  } = chart;
            ctx.save();
            data.datasets.forEach((res: any, indexOfSet: any) => {
              res.data.forEach((dataPoint: any, index: any) => {
                if (dataPoint > 0) {
                  const { y } = chart
                    .getDatasetMeta(indexOfSet)
                    .data[index].tooltipPosition();
                  ctx.fillStyle = res.backgroundColor;
                  ctx.font = "15px sans-serif";
                  if (dataPoint > 0) {
                    if (dataPoint[index] < 1) {
                      dataPoint = "0";
                    }
                    ctx.textAlign = "right";
                    ctx.textBaseline = "middle";
                    ctx.fillText(dataPoint + "%", width / 2 + 130, y);
                  }
                }
              });
            });
          },
        };
    const timeChart = document.getElementById('timeChart') as HTMLCanvasElement;
    this.chart = new Chart(timeChart, {
      type: 'bar',
      data: {
        labels: ["Planned Comple..", "Actual Completion", "Ahead", "", "", ""],
        datasets: [
          {
            label: "Ahead",
            data: [],
            backgroundColor: ["#40acf0"],
            
          },
          {
            label: "Behind",
            data: [],
            backgroundColor: ["#f7a652"],
          },
          {
            label: "On Time",
            data: ["0.9", "14", "14", "", "", ""],
            backgroundColor: ["#6dc96a"],
            barThickness:20
          },
          {
            label: "",
            data: [],
            backgroundColor: "transparent",
            
          },
          {
            label: "",
            data: [],
            backgroundColor: "transparent",
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            align: 'start',
            labels: {
              padding: 10,
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
            max: 100,
            min: -100,
            grid: {
              display: true,
              color: 'hsl(229.41deg 20.48% 16.27%)'
            },
            ticks: {
              stepSize: 25,
              color: 'gray',
              callback: function (value) {
                return value.toString().replace("-", "");
              },
            },
            border:{
              display:false
            }

          },
          y: {
            stacked: true,
            grid: {
              display: false,
            },
            ticks: {
              crossAlign: 'far',
              padding: 5,
              color: 'gray',
              font: {
                size: 15
              },
            }
          },
        },
        layout: {
          padding: {
            top: 20,
            right: 40,
            bottom:60
          }
        }
      },
      plugins: [legendMargin,DataLabels]
    });
  }
}
