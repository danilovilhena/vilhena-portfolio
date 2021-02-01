import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css', './technologies.responsivity.css']
})
export class TechnologiesComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Tecnologias")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Tecnologias"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Conheça as tecnologias que tenho conhecimento e experiência."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Conheça as tecnologias que tenho conhecimento e experiência."}, 
      "name='description'")
  }

}
