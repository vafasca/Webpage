import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'jobs',
    loadChildren: () =>
      import('./features/jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
