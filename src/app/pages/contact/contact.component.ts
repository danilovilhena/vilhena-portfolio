import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', './contact.responsivity.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Contato")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Contato"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Entre em contato comigo para construirmos um excelente site para o seu negócio."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Entre em contato comigo para construirmos um excelente site para o seu negócio."}, 
      "name='description'")
  }

}
