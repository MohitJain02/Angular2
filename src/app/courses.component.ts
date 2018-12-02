import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector : 'courses',
    template : `
    <h1>
    List of Courses :
    </h1>
    <ul>
    <li *ngFor = "let course of courses">
    {{course}}
    </li>
    </ul>
    <img src = "{{imageUrl}}" />
    <div (click) = "onDivClicked()">
    <button class= "btn btn-primary" [class.active] = "isActive" (click) = "onSave($event)">Save</button>
    </div>

    <div>
    <input type = "text" (keyup) = "onKeyUp($event)" />
    <input #email type = "text" (keyup.enter) = "onKeyUpForEmail(email.value)" />
    <input [(ngModel)] = "emailWithTwoWayBinding" type = "text" (keyUp.enter) = "onKeyUpForEmailWithTwoWayBinding()" />
    </div>

    <div>
    <h1> Section to display Course Properties </h1>
    <br/>
    {{course.title | uppercase | lowercase}}
    <br/>
    {{course.students | number}}
    <br/>
    {{course.price | currency: 'AUD' : true : '2.1-1'}}
    <br/>
    {{course.rating | number : '2.2-2'}}
    <br/>
    {{course.releaseDate | date : 'shortDate'}}
    </div>
    <br/>
    <div>
    {{text | summary : 20}}
    </div>`
})
export class CoursesComponent
{
       title : string = "List Of Courses";
       isActive: boolean = true;
       courses;
       text : string = "This is a long message whose summary we need to find out!!!";

       emailWithTwoWayBinding : string = "default@gmail.com";
       imageUrl = "https://www.jquery-az.com/html/images/banana.jpg";
       course = {
           rating : 98.678,
           price : 23.950,
           releaseDate : new Date(2017, 12, 23),
           title : "This is a course title",
           students : 45670
       };
       constructor(service : CoursesService)
       {
           this.courses = service.getCourses();
       }
       onDivClicked()
       {
           console.log("Div is clicked");
       }
       onSave($event)
       {
           $event.stopPropagation(); // to stop event bubbling
           console.log("On Save clicked", $event);
       }
       onKeyUp($event)
       {
           if($event.keyCode === 13)
           {
            console.log("Enter pressed");
           }
       }
       onKeyUpForEmail(email)
       {
           console.log(email);
       }
       onKeyUpForEmailWithTwoWayBinding()
       {
           console.log(this.emailWithTwoWayBinding);
       }
}
