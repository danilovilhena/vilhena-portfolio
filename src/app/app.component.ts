import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vilhena-portfolio';

  constructor(public translate: TranslateService){
    translate.setDefaultLang("pt");
    translate.addLangs(["pt", "en"]);
    if(document.location.pathname == '/en'){
      translate.use('en')
      localStorage.setItem('vilhena-lang','en')
    } else if(document.location.pathname == '/pt'){
      translate.use('pt')
      localStorage.setItem('vilhena-lang','pt')
    } else if(localStorage.getItem('vilhena-lang')){
      translate.use(localStorage.getItem('vilhena-lang'));
    } else {
      translate.use('pt')
      localStorage.setItem('vilhena-lang','pt')
    }
  }
}
