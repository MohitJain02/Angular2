import { Component } from '@angular/core';
import { IFavouriteEventChangedArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';

  courseForDirective = [1, 2];

  coursesForTrack;

  post = {
    isFavourite: true,
    title: "post object in app component"
  }

  likes =
    {
      title: "like component",
      isLiked: false,
      likesCount: 0
    }

  onFavouriteChanged(eventargs: IFavouriteEventChangedArgs) {
    console.log(`Favourite Changed !!! : ${eventargs.newValue}`);
  }

  loadCourses() {
    return this.coursesForTrack = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3,name: 'course3'}
    ];
  }

  onTrackBy(index, course)
  {
    return course ? course.id : undefined;
  }
}
