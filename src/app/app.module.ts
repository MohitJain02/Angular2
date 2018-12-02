import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './courses.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasingComponent } from './title-casing/title-casing.component';
import { TitleCasePipe } from './title-casing/title-casing.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InputformatDirective } from './inputformat.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemycourseformComponent } from './udemycourseform/udemycourseform.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewFormToAddTopicsComponent } from './new-form-to-add-topics/new-form-to-add-topics.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavouriteComponent,
    TitleCasingComponent,
    TitleCasePipe,
    PanelComponent,
    LikesComponent,
    NavigationComponent,
    InputformatDirective,
    ContactFormComponent,
    UdemycourseformComponent,
    SignupFormComponent,
    NewFormToAddTopicsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
