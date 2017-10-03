import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 course = [1,2];
 viewMode = "map";
  
  title = 'app';
  tweet = {
    body: "Here is some tweet",
    isLiked : false,
    likeCount : 0
  }
  likeCountChange(event){
    console.log("output ", event);

  }
}
