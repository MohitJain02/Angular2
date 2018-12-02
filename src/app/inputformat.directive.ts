import { Directive, HostListener, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {

  constructor(private ele : ElementRef)
  {}
  @Input('appInputformat') format : string ;

 @HostListener('blur') onBlur()
  {
    let value : string = this.ele.nativeElement.value;

    if(this.format == 'uppercase')
    {
      this.ele.nativeElement.value = value.toUpperCase();
    }
    else
    {
      this.ele.nativeElement.value = value.toLowerCase();
    }
  }
}
