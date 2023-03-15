import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './components/pages/work-experience/work-experience.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { VoluntaryWorkComponent } from './components/pages/voluntary-work/voluntary-work.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'voluntary-work', component: VoluntaryWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
