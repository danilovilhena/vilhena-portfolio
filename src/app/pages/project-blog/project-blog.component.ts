import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-blog',
  templateUrl: './project-blog.component.html',
  styleUrls: ['./project-blog.component.css', './project-blog.responsivity.css']
})
export class ProjectBlogComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Danilo Vilhena - Projeto Blog")
    this.metaService.updateTag({property: "og:title", content: "Danilo Vilhena - Projeto Blog"}, 
      "property='og:title'")
    this.metaService.updateTag({property: "og:description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o blog de tecnologia que desenvolvi."}, 
      "property='og:description'")
    this.metaService.updateTag({name: "description", content: "Portfólio do desenvolvedor web Danilo Vilhena. Descubra mais detalhes sobre o blog de tecnologia que desenvolvi."}, 
      "name='description'")
    fetch('https://vilhena-blog-backend.herokuapp.com/users/get')
  }

}
