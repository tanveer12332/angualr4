import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-zipe',
  templateUrl: './zipe.component.html',
  styleUrls: ['./zipe.component.css']
})
export class ZipeComponent {
@Input('title') title;
isExpanded:boolean = true;
  constructor() { }
  Collaspe(){
  this.isExpanded = !this.isExpanded;
  }
}
