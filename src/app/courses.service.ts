import { Injectable } from "@angular/core";

@Injectable()

export class CoursesService
{
    constructor()
    {
    }
    getCourses()
     {
           return ["Course 1", "Course 2", "Course 3"];
     }
}