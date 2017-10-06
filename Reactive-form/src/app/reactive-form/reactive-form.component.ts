import { validate, Validator } from 'codelyzer/walkerFactory/walkerFn';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form =  new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    password: new FormControl('', Validators.required)
  })
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
}
