import { Directive, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
@Input('appInputFormat') format;


  constructor(private el:ElementRef) { }
 
@HostListener('focusout') onblur(){
  
   let value:string = this.el.nativeElement.value;
  if(this.format == "lowercase")  
  this.el.nativeElement.value = value.toLowerCase()
  else
  this.el.nativeElement.value = value.toUpperCase();
}
}
