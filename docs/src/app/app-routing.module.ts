import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MyCuriositiesComponent } from './components/pages/my-curiosities/my-curiosities.component';
import { MyProjectsComponent } from './components/pages/my-projects/my-projects.component';

import { PageComponent } from './components/pages/page/page.component';
import { ResumeComponent } from './components/pages/resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: MyProjectsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'curiosities', component: MyCuriositiesComponent},
  {path: 'contacts', component: ContactsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
