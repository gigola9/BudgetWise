import { Routes } from '@angular/router';

export const featureRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule)
  }
]
