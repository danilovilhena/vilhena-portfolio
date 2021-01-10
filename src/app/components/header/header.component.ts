import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  language = 'pt'

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(): void {
    (this.language == 'pt') ? this.language = 'en' : this.language = 'pt'
  }
}
