import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

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
import { TechnologiesComponent } from './pages/technologies/technologies.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    ProjectMoviesComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "assets/i18n/");
}