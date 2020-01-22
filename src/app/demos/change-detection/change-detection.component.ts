import {AfterViewChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ImPerson} from '../shared/models/im-person';


@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  person: ImPerson = new ImPerson('Bob', 2);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    console.log(new Date() + '- ngAfterViewChecked in cd');
  }

  ngDoCheck(): void {
    console.log(new Date() + '- ngDoCheck in cd');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(new Date() + '- ngOnChanges in cd');
  }

  addAge(){
    let newAge = this.person.age;
    this.person = this.person.merge({'age': ++newAge}) as ImPerson;
    console.log(this.person.age);
  }

  updateAge(){
    this.person = {...this.person, age: ++this.person.age};
  }
}
