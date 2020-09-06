import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ManageIterationsComponent } from './home/manage-iterations/manage-iterations.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'iterations', component: ManageIterationsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
