import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsivity.css']
})
export class HeaderComponent implements OnInit {
  language = this.translate.currentLang
  isProjects = document.location.pathname.includes('project')
  isTech = document.location.pathname.includes('tech')
  isContact = document.location.pathname.includes('contact')

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    if(document.location.pathname == '/en'){
      this.translate.use('en')
      localStorage.setItem('vilhena-lang','en')
      this.language = 'en'
      document.documentElement.lang = 'en'
    } else if(document.location.pathname == '/pt'){
      this.translate.use('pt')
      localStorage.setItem('vilhena-lang','pt')
      this.language = 'pt'
      document.documentElement.lang = 'pt'
    }
  }

  changeLanguage(): void {
    (this.language == 'pt') ? this.language = 'en' : this.language = 'pt'
    this.translate.use(this.language)
    localStorage.setItem('vilhena-lang', this.language)
    document.documentElement.lang = this.language
  }
}
