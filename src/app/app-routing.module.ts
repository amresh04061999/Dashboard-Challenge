import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'Health-dashboard'
  },
  { path: 'Health-dashboard', loadChildren: () => import('./health-dashboard/health-dashboard.module').then(m => m.HealthDashboardModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
