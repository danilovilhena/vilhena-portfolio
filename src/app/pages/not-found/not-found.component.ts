import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css', './not-found.responsivity.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  return(){
    this._location.back()
  }
}
