import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RepairsComponentComponent } from './repairs-component/repairs-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';


const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'repair', component: RepairsComponentComponent },
  { path: 'services', component: ServicesComponentComponent },
  { path: 'contact', component: ContactComponentComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
