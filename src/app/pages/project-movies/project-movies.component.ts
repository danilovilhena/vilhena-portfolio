import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-movies',
  templateUrl: './project-movies.component.html',
  styleUrls: ['./project-movies.component.css', './project-movies.responsivity.css']
})
export class ProjectMoviesComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projeto buscador de filmes")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projeto buscador de filmes"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto buscador de filmes que desenvolvi."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto buscador de filmes que desenvolvi."}, 
      "name='description'")
  }

}
