import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 course = [1,2];
newCourse ;
 
 viewMode = "map";
  ngOnInit(){
  this. loadCourse()
  }
  title = 'app';
  tweet = {
    body: "Here is some tweet",
    isLiked : false,
    likeCount : 0
  }
  likeCountChange(event){
    console.log("output ", event);

  }
  loadCourse(){
  return this.newCourse =   [
      {
        Id:1,
        name:"Course 1"
      },
      {
        Id:2,
        name:"Course 1"
      },
      {
        Id:3,
        name:"Course 1"
      }
    ]
  }
  trackCourse(course,index){
  return course ?  course.Id : undefined;
  }
}
