import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProjectActionsComponent } from './project-actions/project-actions.component';
import { ProjectComponent } from './project/project.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../shared/libraries/primeng.module';
import { ConfirmationService } from 'primeng/api';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [
    AllProjectsComponent,
    ProjectActionsComponent,
    ProjectComponent,
    AddProjectComponent,
    DashboardComponent,
    VendorsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class ProjectsModule { }
