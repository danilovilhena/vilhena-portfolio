import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.responsivity.css']
})
export class HomeComponent implements OnInit {

  constructor(private translate: TranslateService) {
    if(document.location.pathname == '/en'){
      localStorage.setItem('vilhena-lang', 'en')
      this.translate.use('en')
    } else {
      localStorage.setItem('vilhena-lang', 'pt')
      this.translate.use('pt')
    }
  }

  ngOnInit(): void {
    
    fetch('https://vilhena-blog-backend.herokuapp.com/users/get')
  }

}
