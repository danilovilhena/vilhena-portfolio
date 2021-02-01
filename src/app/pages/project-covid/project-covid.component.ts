import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-covid',
  templateUrl: './project-covid.component.html',
  styleUrls: ['./project-covid.component.css', './project-covid.responsivity.css']
})
export class ProjectCovidComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projeto Dashboard COVID-19")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projeto Dashboard COVID-19"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto Dashboard COVID-19 que participei do desenvolvimento."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto Dashboard COVID-19 que participei do desenvolvimento."}, 
      "name='description'")
  }

}
