import {AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit, OnChanges, DoCheck, AfterViewChecked {

  @Input()
  person: Imperson;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
  }

  ngDoCheck(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
