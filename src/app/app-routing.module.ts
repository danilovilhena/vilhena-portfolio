import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectBlogComponent } from './pages/project-blog/project-blog.component';
import { ProjectCovidComponent } from './pages/project-covid/project-covid.component';
import { ProjectEmpathyComponent } from './pages/project-empathy/project-empathy.component';
import { ProjectLandingComponent } from './pages/project-landing/project-landing.component';
import { ProjectMoviesComponent } from './pages/project-movies/project-movies.component';
import { ProjectWalComponent } from './pages/project-wal/project-wal.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "projects/blog", component: ProjectBlogComponent },
  { path: "projects/covid", component: ProjectCovidComponent },
  { path: "projects/empathy", component: ProjectEmpathyComponent },
  { path: "projects/landing", component: ProjectLandingComponent },
  { path: "projects/movies", component: ProjectMoviesComponent },
  { path: "projects/wal", component: ProjectWalComponent },
  { path: "contact", component: ContactComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
