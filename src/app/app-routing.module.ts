import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromCoreContainers from './core/containers';
import { featureRoutes } from './features/features.routes';
import { LandingComponent } from './shared/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    component: fromCoreContainers.MainComponent,
    children: [...featureRoutes]
  },
  {
    path: "landing",
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
