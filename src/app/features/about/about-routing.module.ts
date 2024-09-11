import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { WowCultureComponent } from './components/wow-culture/wow-culture.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: AboutComponent,
    children: [
    {
      path: 'sobre-nosotros', component: AboutUsComponent
    },
    {
      path: 'cultura-wow', component: WowCultureComponent
    }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
