import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthDashboardComponent } from './health-dashboard.component';
import { HealthContainerComponent } from './health-container/health-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: HealthDashboardComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'dashboard'
      },
      {
        path:'dashboard',component:DashboardComponent
      }
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthDashboardRoutingModule { }
