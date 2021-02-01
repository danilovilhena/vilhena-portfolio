import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-empathy',
  templateUrl: './project-empathy.component.html',
  styleUrls: ['./project-empathy.component.css', './project-empathy.responsivity.css']
})
export class ProjectEmpathyComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projeto Empathy WAL")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projeto Empathy WAL"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto Empathy WAL que participei do desenvolvimento."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto Empathy WAL que participei do desenvolvimento."}, 
      "name='description'")
  }

}
