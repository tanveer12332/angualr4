import { UsernameValidator } from './username.validator';
import { validate, Validator } from 'codelyzer/walkerFactory/walkerFn';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,ValidationErrors} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form =  new FormGroup({
    account: new FormGroup({
      username : new FormControl('', 
      Validators.required,
      UsernameValidator.userNameShouldUnique
    ),
    password: new FormControl('', Validators.required)
    })
    
  })
  // Login(){
  //   this.form.setErrors({
  //     invalidLogin : true
  //   })
  // }
  get username(){
    return this.form.get('account.username');
   
  }
  get password(){
    return this.form.get('account.password');
  }
}
