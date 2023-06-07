import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-progress-presentation',
  templateUrl: './progress-presentation.component.html',
  styleUrls: ['./progress-presentation.component.scss']
})
export class ProgressPresentationComponent  implements OnInit{
  @ViewChild('tasks') tasks!: ElementRef
  private chart!: any;
  constructor() {
  }
  ngOnInit(): void {
    const progressChart = document.getElementById('Progress') as HTMLCanvasElement;
    this.chart = new Chart(progressChart, {
      type: 'bar',
      data: {
        labels: ['Contracts', 'Design', 'Procurement','Construction','Post Const...','Project Clo...'],
        datasets: [
          {
            data: [100,80,19,0.5,0.5,0.5],
            backgroundColor: ['#9da4ad', '#69c66a', '#4fcbc2','hsl(224deg 6.49% 54.71%)','hsl(224deg 6.49% 54.71%)','hsl(224deg 6.49% 54.71%)'],
            borderWidth: 0
          },
        ],
      },
      options: {
        indexAxis:'y',
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
            labels: {
              color:'white',
              },
          }
        },
        scales: {
          y: {
            grid: {
              display: false 
            }
          },
          x: {
            grid: {
              display: false ,
            
            },
            ticks:{
              display:false
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
 
  


