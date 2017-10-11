import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'form-builder-form',
  templateUrl: './form-builder-form.component.html',
  styleUrls: ['./form-builder-form.component.css']
})
export class FormBuilderFormComponent  {
form;
  constructor(fb:FormBuilder) { 

    this.form =  fb.group({
      name: [],
      // username : ['', Validators.required],
      // comments : ['', Validators.required],
      contact : fb.group({
       
        email:['', Validators.required],
        message :['', Validators.required],
        phone:['', Validators.required]
      })
    })
  }

  Send(form:FormGroup){
  console.log(form.controls.contact.value)
  }

}
