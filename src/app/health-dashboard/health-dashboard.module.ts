import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthDashboardRoutingModule } from './health-dashboard-routing.module';
import { HealthDashboardComponent } from './health-dashboard.component';
import { HealthContainerComponent } from './health-container/health-container.component';
import { HealthPresentationComponent } from './health-container/health-presentation/health-presentation.component';


@NgModule({
  declarations: [
    HealthDashboardComponent,
    HealthContainerComponent,
    HealthPresentationComponent
  ],
  imports: [
    CommonModule,
    HealthDashboardRoutingModule
  ]
})
export class HealthDashboardModule { }
