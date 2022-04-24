import { Component, OnInit } from '@angular/core';
import {course} from "../course_detail";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  course = course;
  constructor() { }

  ngOnInit(): void {
  }

}
