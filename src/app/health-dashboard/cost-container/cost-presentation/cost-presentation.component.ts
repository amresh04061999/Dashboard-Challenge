import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, scales } from 'chart.js';

@Component({
  selector: 'app-cost-presentation',
  templateUrl: './cost-presentation.component.html',
  styleUrls: ['./cost-presentation.component.scss']
})
export class CostPresentationComponent implements OnInit ,OnDestroy  {

  private chart!: any;
  constructor() {
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.refreshChart() 
  }
  ngOnInit(): void {
    this.costChart();
    this.refreshChart() 
  }
  // cost chart
  public costChart(){
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
    const costChart = document.getElementById('cost') as HTMLCanvasElement;
    this.chart = new Chart(costChart, {
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
              // padding: 0,
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
            bottom: 40,
            top: 20
          }
        },
        elements: {
          bar: {
            borderWidth: {
              left: 3,
              right: 3
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
              color: 'gray',
              font: {
                size: 15,
              },
              padding: 20,
            },
            grid: {
              color: 'hsl(229.41deg 20.48% 16.27%)',
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
  public updateChartSize() {
    const canvas = document.getElementById('cost') as HTMLCanvasElement;
    console.log(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Update the chart layout and redraw
    this.chart.resize();
    this.chart.update();
    
  }
  refreshChart() {
    this.updateChartSize();
  }
  ngOnDestroy(): void {
    // this.destroyChart();
  }
 
}
