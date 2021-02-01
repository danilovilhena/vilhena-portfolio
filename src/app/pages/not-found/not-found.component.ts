import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css', './not-found.responsivity.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta, private _location: Location) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - 404")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - 404"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Página não encontrada, por favor retorne para o site!"}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Página não encontrada, por favor retorne para o site!"}, 
      "name='description'")
  }

  return(){
    this._location.back()
  }
}
