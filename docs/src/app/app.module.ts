import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/default/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionComponent } from './components/content-pages/home/section/section.component';
import { PageComponent } from './components/pages/page/page.component';
import { MyProjectsComponent } from './components/pages/my-projects/my-projects.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { MyCuriositiesComponent } from './components/pages/my-curiosities/my-curiosities.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HeaderComponent } from './components/default/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutMeComponent } from './components/content-pages/home/about-me/about-me.component';
import { GeneralBoardComponent } from './components/content-pages/home/general-board/general-board.component';
import { CardComponent } from './components/content-pages/projects/card/card.component';
import { ResumeCardComponent } from './components/content-pages/resume/resume-card/resume-card.component';
import { ResumeBadgeComponent } from './components/content-pages/resume/resume-badge/resume-badge.component';
import { ResumePostComponent } from './components/content-pages/resume/resume-post/resume-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SectionComponent,
    PageComponent,
    MyProjectsComponent,
    ResumeComponent,
    MyCuriositiesComponent,
    ContactsComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    GeneralBoardComponent,
    CardComponent,
    ResumeCardComponent,
    ResumeBadgeComponent,
    ResumePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
