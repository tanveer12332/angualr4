import { CoursesService } from '../courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
public courses;
isActive = true;
  constructor(public cs:CoursesService) {
    this.courses =  cs.getCourses();
   }

}