import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummydata',
  templateUrl: './dummydata.component.html',
  styleUrls: ['./dummydata.component.css']
})
export class DummydataComponent implements OnInit {
  public posts: any = [];
  constructor(public service:PostService) { }

  ngOnInit() {
  this.service.getPost()
  .subscribe(response=>{
    this.posts = response.json();
  })
  }
  addPost(input:HTMLInputElement){
    let post = {title : input.value}
    input.value = "";
    
   this.service.createPost(post)
   .subscribe(res=>{
    post['id'] = res.json().id
     this.posts.splice(0,0,post);
    // this.post = res.json().title;
   })
  }
  UpdatePost(post){
    console.log(post)
    this.service.udatePost(post)
    .subscribe(res=>{
      console.log(res.json())
    })
  }
  DeletePost(post){
  this.service.deletePost(post.id)
  .subscribe(res=>{
  let index = this.posts.indexOf(post);
  this.posts.splice(index, 1);
  })
  }
}
