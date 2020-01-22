import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-cc-child',
  templateUrl: './cc-child.component.html',
  styleUrls: ['./cc-child.component.css']
})
export class CcChildComponent implements OnInit, OnChanges {

  @Input('person')
  childPerson;

  @Output()
  onAddAge = new EventEmitter<number>();

  childAge: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.childAge = this.childPerson.age;
  }

  addAge() {
    this.childAge++;
    this.onAddAge.emit(this.childAge);
  }
}
