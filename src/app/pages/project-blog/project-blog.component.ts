import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-blog',
  templateUrl: './project-blog.component.html',
  styleUrls: ['./project-blog.component.css', './project-blog.responsivity.css']
})
export class ProjectBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    fetch('https://vilhena-blog-backend.herokuapp.com/users/get')
  }

}
