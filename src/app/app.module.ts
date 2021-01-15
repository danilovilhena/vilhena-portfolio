import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectBlogComponent } from './pages/project-blog/project-blog.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectCovidComponent } from './pages/project-covid/project-covid.component';
import { ProjectEmpathyComponent } from './pages/project-empathy/project-empathy.component';
import { ProjectLandingComponent } from './pages/project-landing/project-landing.component';
import { ProjectWalComponent } from './pages/project-wal/project-wal.component';
import { ProjectMoviesComponent } from './pages/project-movies/project-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectBlogComponent,
    NotFoundComponent,
    ProjectCovidComponent,
    ProjectEmpathyComponent,
    ProjectLandingComponent,
    ProjectWalComponent,
    ProjectMoviesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
