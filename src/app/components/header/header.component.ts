import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsivity.css']
})
export class HeaderComponent implements OnInit {
  language = 'pt'
  isProjects = document.location.pathname.includes('project')
  isTech = document.location.pathname.includes('tech')
  isContact = document.location.pathname.includes('contact')

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    (this.language == 'pt') ? this.language = 'en' : this.language = 'pt'
  }
}
