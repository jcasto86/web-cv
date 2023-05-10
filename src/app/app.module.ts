import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { LinksComponent } from './components/parts/links/links.component';
import { WorkExperienceComponent } from './components/pages/work-experience/work-experience.component';
import { AppRoutingModule } from './app-routing.module';

import { EducationComponent } from './components/pages/education/education.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { VoluntaryWorkComponent } from './components/pages/voluntary-work/voluntary-work.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrowsPreviousNextSectionComponent } from './components/parts/arrows-previous-next-section/arrows-previous-next-section.component';
import { JobPositionCardComponent } from './components/pages/work-experience/job-position-card/job-position-card.component';
import { PhotoHighlightsPresentationComponent } from './components/pages/homepage/photo-highlights-presentation/photo-highlights-presentation.component';

import { HttpClientModule } from '@angular/common/http';
import { AddDataComponent } from './components/pages/add-data/add-data.component'
import { EducationCardComponent } from './components/pages/education/education-card/education-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    LinksComponent,
    WorkExperienceComponent,
    EducationComponent,
    EducationCardComponent,
    SkillsComponent,
    VoluntaryWorkComponent,
    ContactComponent,
    ArrowsPreviousNextSectionComponent,
    JobPositionCardComponent,
    PhotoHighlightsPresentationComponent,
    AddDataComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
