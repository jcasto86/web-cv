import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WorkExperienceComponent } from './components/pages/work-experience/work-experience.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { EducationComponent } from './components/pages/education/education.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { VoluntaryWorkComponent } from './components/pages/voluntary-work/voluntary-work.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { AddDataComponent } from './components/pages/add-data/add-data.component';
import { EmailSentThankYouComponent } from './components/pages/contact/email-sent-thank-you/email-sent-thank-you.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'voluntary-work', component: VoluntaryWorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-data', component: AddDataComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact-email-sent', component: EmailSentThankYouComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
