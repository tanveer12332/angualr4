import { BadInput } from './../error-handling/bad-input';
import { NotFoundError } from './../error-handling/not-found-error';
import { AppError } from './../error-handling/app-error';
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
  this.service.getAll()
  .subscribe(posts=> this.posts = posts)
  }
  addPost(input:HTMLInputElement){
    let post = {title : input.value}
    input.value = "";
    this.posts.splice(0,0,post);
   this.service.create(post)
   .subscribe(newPost=>{
    post['id'] = newPost.id
    // this.post = res.json().title;
   },(error:AppError) =>{
    this.posts.splice(0,1);
     if(error instanceof BadInput){
       //this.form.setErrors(error.orignalError);
     }
     else throw error;
   })
  }
  UpdatePost(post){
    console.log(post)
    this.service.udate(post)
    .subscribe(updatedPost=>{
      console.log(updatedPost)
    })
  }
  DeletePost(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  this.service.delete(post.id)
  .subscribe(null,
  (error: AppError)=>{
    this.posts.splice(index, 0,post);
    if(error instanceof NotFoundError){
      alert('this post already delted');
    }
    else throw error;
  })
  }
}
