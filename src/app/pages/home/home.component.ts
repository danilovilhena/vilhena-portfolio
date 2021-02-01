import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsivity.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Desenvolvedor Web")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Desenvolvedor Web"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Desenvolvedor web com ênfase na acessibilidade e otimização dos sites."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Desenvolvedor web com ênfase na acessibilidade e otimização dos sites."}, 
      "name='description'")
    fetch('https://vilhena-blog-backend.herokuapp.com/users/get')
  }

}
