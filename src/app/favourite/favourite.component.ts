import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation : ViewEncapsulation.Emulated // to introduce shadown DOM
})
export class FavouriteComponent implements OnInit, IFavouriteEventChangedArgs {

  @Input('isFavourite') isFavourite : boolean ;

  @Output('change') change = new EventEmitter();

  newValue;

  constructor() { }

  ngOnInit() {
  }

  onClick()
  {
    this.isFavourite = !this.isFavourite;
    this.newValue = this.isFavourite;
    // once change then emit the change event
    this.change.emit({newValue : this.newValue}); 
  }

}
export interface IFavouriteEventChangedArgs
{
  newValue : boolean;
}
