import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', './projects.responsivity.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projetos")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projetos"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre os projetos que já desenvolvi."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre os projetos que já desenvolvi."}, 
      "name='description'")
  }

}
