import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent  {

  constructor() { }

  form = new FormGroup({
    topies: new FormArray([])
  })
  addTopic(topies:HTMLInputElement){
   this.topies.push(new FormControl(topies.value));
    topies.value = "";
  }
   get topies(){
  return this.form.get('topies') as FormArray;
   }
   removeTopic(topic:FormControl){
    let index = this.topies.controls.indexOf(topic);
    this.topies.removeAt(index);
   }
}
