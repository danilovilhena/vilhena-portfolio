import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-wal',
  templateUrl: './project-wal.component.html',
  styleUrls: ['./project-wal.component.css', './project-wal.responsivity.css']
})
export class ProjectWalComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projeto WAL")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projeto WAL"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto WAL que participei do desenvolvimento."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o projeto WAL que participei do desenvolvimento."}, 
      "name='description'")
  }

}
