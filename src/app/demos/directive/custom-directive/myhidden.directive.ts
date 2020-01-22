import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges{

  @Input()
  person;

  constructor(private elementRef: ElementRef) { }



  ngOnChanges() {
    if (this.person) {
      this.elementRef.nativeElement.style.display = '';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

}
