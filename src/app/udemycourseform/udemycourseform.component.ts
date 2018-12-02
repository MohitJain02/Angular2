import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemycourseform',
  templateUrl: './udemycourseform.component.html',
  styleUrls: ['./udemycourseform.component.css']
})
export class UdemycourseformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courseGroup = [{
    id : 1, name: 'Development'
  },
{
id: 2, name : 'Art'
},
{
id : 3, name : 'Language'
}]
}
