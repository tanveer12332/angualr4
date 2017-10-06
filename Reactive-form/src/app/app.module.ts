import { SimpleFormComponent } from './simple-form/simple-form.component';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PanelComponent } from './bootstrap-component/panel/panel.component';
import { LikeComponent } from './bootstrap-component/like/like.component';
import { InputsComponent } from './inputs/inputs.component';
import { InputFormatDirective } from './input-format.directive';
import { ZipeComponent } from './zipe/zipe.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';




@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PanelComponent,
    LikeComponent,
    InputsComponent,
    InputFormatDirective,
    ZipeComponent,
    SimpleFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
