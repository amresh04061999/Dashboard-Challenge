import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, scales } from 'chart.js';

@Component({
  selector: 'app-cost-presentation',
  templateUrl: './cost-presentation.component.html',
  styleUrls: ['./cost-presentation.component.scss']
})
export class CostPresentationComponent implements OnInit {
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
    const legendMargin = {
      id: "increase-legend-spacing",
      beforeInit(chart: any) {
        const Fit = chart.legend.fit;
        chart.legend.fit = function fit() {
          Fit.bind(chart.legend)();
          this.height += 50;
        };
      },
    };
    const progressChart = document.getElementById('cost') as HTMLCanvasElement;
    this.chart = new Chart(progressChart, {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: 'Actual',
            data: [3.1],
            backgroundColor: ['#69c66a'],
            barThickness: 50,
          },
          {
            label: 'Planned',
            data: [4.5],
            backgroundColor: ['#50cbc2'],
            barThickness: 50,
          },
          {
            label: 'Budget',
            data: [6],
            backgroundColor: ['#42abf5'],
            barThickness: 50,

          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {
            display: false,
          },
          legend: {
            align: 'start',
            labels: {
              padding: 20,
              font: {
                size: 14
              },
              usePointStyle: true,
              pointStyle: 'circle'
            },
          }
        },
        layout: {
          padding: {
            left: 40,
            top: 30,
            right: 20,
          }
        },
        elements:{
              bar:{
                borderWidth:{
                  left:3,
                  right:3
                }
              }
           },
        scales: {
          y: {
            ticks: {
              callback: function (value, index) {
                if (index == 0) {
                  return "$" + value;
                } else {
                  return value + "k";
                }
              },
              stepSize: 1.5,
              color: 'white',
              font: {
                size: 15,
              },
              padding: 20,
            },
            grid: {
              color:'hsl(229.41deg 20.48% 16.27%)',
              lineWidth: 1.5,
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      },
      plugins: [legendMargin]
    });
  }
}
