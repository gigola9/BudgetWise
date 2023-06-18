import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path: 'projects', component: AllProjectsComponent },
  { path: 'projects/project/:id', component: ProjectComponent },
  { path: 'projects/vendros', component: VendorsComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
