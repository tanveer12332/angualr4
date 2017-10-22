import { AppErrorHandler } from './error-handling/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
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
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderFormComponent } from './form-builder-form/form-builder-form.component';
import { DummydataComponent } from './dummydata/dummydata.component';
import {  HttpModule } from '@angular/http';



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
    ReactiveFormComponent,
    NewCourseFormComponent,
    FormBuilderFormComponent,
    DummydataComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [
    CoursesService,
    PostService,
    {provide : ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
