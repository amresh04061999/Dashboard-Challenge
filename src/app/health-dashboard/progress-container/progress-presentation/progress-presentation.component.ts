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
    const labelsMargin = {
      id: 'labelMargin',
      afterDatasetsDraw(chart: any) {
        const { ctx, data } = chart;
        ctx.save();
        data.datasets[0].data.forEach((dataPoint: any, index: any) => {
          const { y } = chart.getDatasetMeta(0).data[index].tooltipPosition();
          ctx.font = "normal 16px sans-serif";
          ctx.fillStyle = data.datasets[0].backgroundColor[index];
          (ctx.textAlign = "right"), (ctx.textBaseline = "middle");
          if (dataPoint > 0 && dataPoint < 1) {
            dataPoint = 0;
          }
          ctx.fillText(dataPoint + "%", 150, y);
        });
      },
    }
    
    const progressChart = document.getElementById('Progress') as HTMLCanvasElement;
    this.chart = new Chart(progressChart, {
      type: 'bar',
      data: {
        labels: ['Contracts', 'Design', 'Procurement', 'Construction', 'Post Const...', 'Project Clo...'],
        datasets: [
          {
            data: [100, 80, 19, 0.5, 0.5, 0.5],
            backgroundColor: ['#6acb6d', '#67cb6c', '#df5a9d', '#7f848e', '#7f848e', '#7f848e'],
            barThickness:18
          },
        ],
      },
      options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels:{
            display:false
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
              padding: 30,
              color: 'gray',
              font: {
                size: 15
              },
            }
          },
          x: {
            grid: {
              display: false,
            },
            border: {
              display: false
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
      plugins: [labelsMargin]
    });
   
  }
  
};





