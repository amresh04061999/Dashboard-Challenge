import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthDashboardRoutingModule } from './health-dashboard-routing.module';
import { HealthDashboardComponent } from './health-dashboard.component';
import { HealthContainerComponent } from './health-container/health-container.component';
import { HealthPresentationComponent } from './health-container/health-presentation/health-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { ProgressContainerComponent } from './progress-container/progress-container.component';
import { TimeContainerComponent } from './time-container/time-container.component';
import { CostContainerComponent } from './cost-container/cost-container.component';
import { WorkloadContainerComponent } from './workload-container/workload-container.component';
import { CostPresentationComponent } from './cost-container/cost-presentation/cost-presentation.component';
import { ProgressPresentationComponent } from './progress-container/progress-presentation/progress-presentation.component';
import { TaskPresentationComponent } from './tasks-container/task-presentation/task-presentation.component';
import { TimePresentationComponent } from './time-container/time-presentation/time-presentation.component';
import { WorkloadPresentationComponent } from './workload-container/workload-presentation/workload-presentation.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HealthDashboardComponent,
    HealthContainerComponent,
    HealthPresentationComponent,
    TasksContainerComponent,
    ProgressContainerComponent,
    TimeContainerComponent,
    CostContainerComponent,
    WorkloadContainerComponent,
    CostPresentationComponent,
    ProgressPresentationComponent,
    TaskPresentationComponent,
    TimePresentationComponent,
    WorkloadPresentationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HealthDashboardRoutingModule,
    SharedModule
  ]
})
export class HealthDashboardModule { }
