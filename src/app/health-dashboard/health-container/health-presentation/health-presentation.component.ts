import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-health-presentation',
  templateUrl: './health-presentation.component.html',
  styleUrls: ['./health-presentation.component.scss']
})
export class HealthPresentationComponent {

  healthData = [
    { id: 1, healthTitle: 'Time', healthDescription: '14% ahead of schedule' },
    { id: 2, healthTitle: 'Task', healthDescription: '12 tasks of completed' },
    { id: 3, healthTitle: 'WorkLoad', healthDescription: '12 tasks overdue' },
    { id: 4, healthTitle: 'Progress', healthDescription: '14% complete' },
    { id: 5, healthTitle: 'Cost', healthDescription: '42% under budget' },
  ]
  constructor() {
  }

}
