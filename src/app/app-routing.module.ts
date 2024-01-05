import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    data: { title: 'Home' },
    loadChildren: () =>
      import('./modules/user/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/user/project/project.module').then(
        (m) => m.ProjectModule
      ),
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./modules/user/documentation/documentation.module').then(
        (m) => m.DocumentationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
